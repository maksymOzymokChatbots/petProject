/**
 * Props
 */
type CountControllerProps = {
  /**
   * Value
   */
  value: number;
  /**
   * On add
   */
  onAdd: () => void;

  /**
   * On delete
   */
  onDelete: () => void;
};

const useCountControllerProps = ({
  value,
  onAdd,
  onDelete
}: CountControllerProps) => {
  return { value, onAdd, onDelete };
};

export { useCountControllerProps };
