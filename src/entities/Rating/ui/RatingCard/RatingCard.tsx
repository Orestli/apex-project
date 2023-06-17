import React, { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import Button from '@/shared/ui/Button/Button';
import Card from '@/shared/ui/Card/Card';
import Drawer from '@/shared/ui/Drawer/Drawer';
import Input from '@/shared/ui/Input/Input';
import Modal from '@/shared/ui/Modal/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import StartRating from '@/shared/ui/StartRating/StartRating';
import Text from '@/shared/ui/Text/Text';

interface Props {
  className?: string;
  feedBackTitle?: string;
  hasFeedback?: boolean;
  rate?: number;
  title?: string;
  onAccept?(starsCount: number, feedback?: string): void;
  onCancel?(starsCount: number): void;
}

const RatingCard: React.FC<Props> = ({
  rate,
  title,
  feedBackTitle,
  hasFeedback,
  onCancel,
  onAccept,
  className,
}) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate ?? 0);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);

      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept],
  );

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <>
      <Text title={feedBackTitle} />
      <Input
        placeholder={t('your-review')}
        value={feedback}
        onChange={setFeedback}
        data-testid="ratingCardInput"
      />
    </>
  );

  return (
    <Card className={className} fullWidth data-testid="ratingCard">
      <VStack align="center" gap="8">
        <Text title={starsCount ? t('thanks-for-your-feedback') : title} />
        <StartRating selectedStars={rate} size={40} onSelect={onSelectStars} />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          <VStack gap="32" max>
            {modalContent}
            <HStack gap="16" max justify="end">
              <Button
                onClick={cancelHandler}
                theme="outline_red"
                data-testid="ratingCardCloseButton"
              >
                {t('close')}
              </Button>
              <Button
                onClick={acceptHandler}
                data-testid="ratingCardSendButton"
              >
                {t('Send')}
              </Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} onClose={cancelHandler} lazy>
          <VStack gap="32">
            {modalContent}
            <Button onClick={acceptHandler}>{t('Send')}</Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  );
};

export default memo(RatingCard);
