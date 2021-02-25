import { ControlProps } from '../../form/control';
import { useState, useRef, ReactNode, useMemo } from 'react';

/**
 * Props
 */
type InputProps<V = string | number> = ControlProps<V> & {
  /**
   * Html input type
   */
  type?: 'text' | 'number' | 'password';

  /**
   * Input mask
   */
  mask?: string;

  /**
   * Editable
   */
  editable?: boolean;

  /**
   * Mask char
   */
  maskChar: string;

  /**
   * Focus handler
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => any;

  /**
   * Blur handler
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => any;

  /**
   * Key down handler
   */
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => any;

  /**
   * After content
   */
  after?: JSX.Element | ReactNode;

  reference?: React.MutableRefObject<InputRef>;

  iconName?: string;

  _iconOnClick?: () => void;
};

type InputRef = Pick<HTMLInputElement, 'blur' | 'focus'>;

/**
 * Use input
 */
const useInputProps = ({
  iconName,
  type,
  value,
  onBlur,
  onFocus,
  onChange,
  reference
}: InputProps) => {
  const [focused, setFocused] = useState(false);
  const hasValue = Boolean(value) || value == '0';
  const input = useRef<HTMLInputElement>();
  const _onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);

    onFocus(event);
  };

  const _onBlur = event => {
    setFocused(false);

    onBlur(event);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!focused) setFocused(true);

    const { value } = event.target;

    onChange(value);
  };

  const outRef = useMemo(
    () => ({
      focus: () => {
        input.current.focus();
      },
      blur: () => {
        input.current.blur();
      }
    }),
    [input.current]
  );

  if (reference) {
    reference.current = outRef;
  }

  const [icon, setIcon] = useState(iconName);
  const [inputType, setInputType] = useState(type);
  const _iconOnClick = () => {
    if (icon === 'eye-off') {
      setIcon('eye');
      setInputType('text');
    } else if (icon === 'eye') {
      setIcon('eye-off');
      setInputType('password');
    }
  };

  return {
    icon,
    _iconOnClick,
    inputType,
    input,
    focused,
    _onBlur,
    _onFocus,
    hasValue,
    onInputChange
  };
};

export { InputProps, InputRef, useInputProps };
