import React, { Suspense } from 'react';

import Loader from '@/shared/ui/Loader/Loader';
import Modal from '@/shared/ui/Modal/Modal';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface Props {
  isOpen: boolean;
  onClose(): void;
}

const LoginModal: React.FC<Props> = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} lazy>
    <Suspense fallback={<Loader />}>
      <LoginFormAsync onSuccess={onClose} />
    </Suspense>
  </Modal>
);

export default LoginModal;
