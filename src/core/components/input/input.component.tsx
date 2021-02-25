import { hoc } from '@core/utils';
import classNames from 'classnames';
import * as React from 'react';
import _Mask, * as InputMask from 'react-input-mask';
import { useInputProps } from './input.props';
import * as styles from './input.scss';
import { Label } from '../label';
import { Icon } from '../icon';

/**
 * !Typings retard alert!
 */
const Mask: typeof _Mask = InputMask as any;

/**
 * Renders Input
 */
const Input = hoc(
  useInputProps,
  ({
    icon,
    _iconOnClick,
    inputType,
    mask,
    // type,
    after,
    input,
    value,
    label,
    error,
    isError,
    focused,
    _onBlur,
    disabled,
    editable,
    _onFocus,
    maskChar,
    children,
    hasValue,
    className,
    onKeyDown,
    onInputChange
  }) => (
    <div
      className={classNames(styles.input, className, {
        [styles.inputAfter]: after,
        [styles.inputFocused]: focused,
        [styles.inputHasError]: isError,
        [styles.inputDisabled]: disabled,
        [styles.inputHasValue]: hasValue,
        [styles.inputHasLabel]: Boolean(label)
      })}
    >
      {label && <Label>{label}</Label>}
      {/* <div className={styles.fieldBox}> */}
      {editable ? (
        <Mask
          className={classNames(styles.field, {
            [styles.inputNumber]: inputType === 'number'
          })}
          type={inputType}
          mask={mask}
          onBlur={_onBlur}
          onKeyDown={onKeyDown}
          inputRef={ref => (input.current = ref)}
          onFocus={_onFocus}
          disabled={disabled}
          value={value?.toString() ?? ''}
          maskChar={maskChar}
          onChange={onInputChange}
        />
      ) : (
        <div className={styles.field} title={value as string}>
          {value}
        </div>
      )}

      {icon && (
        <Icon name={icon} className={styles.icon} onClick={_iconOnClick} />
      )}

      {after}

      {children}
      {/* </div> */}

      {isError && <div className={styles.error}>{error}</div>}
    </div>
  )
);

Input.defaultProps = {
  value: '',
  mask: null,
  type: 'text',
  maskChar: '_',
  editable: true,
  onBlur: () => {},
  onFocus: () => {}
};

export { Input };
