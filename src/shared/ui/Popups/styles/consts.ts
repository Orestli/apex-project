import type { DropdownDirection } from '../../../types/ui';

import styles from './popup.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
  'top right': styles.optionsTopRight,
  'top left': styles.optionsTopLeft,
  'bottom right': styles.optionsBottomRight,
  'bottom left': styles.optionsBottomLeft,
};
