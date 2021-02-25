import { useSelector } from 'react-redux';
import { State } from '@store';
import { useMemo, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { navigate } from '@store/router';
import {
  addItemCount,
  deleteItemCount,
  deleteItem,
  basketSubmit
} from '@store/general';
/**
 * Props
 */
type BasketProps = {};

const useBasketProps = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState<boolean>(false);
  const [submitted, setSubmittedBasket] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [sendToEmail, setSendToEmail] = useState(false);

  const {
    general: { basket }
  } = useSelector((state: State) => state);

  const productsCount = useMemo(() => {
    return Object.entries(basket).reduce(
      (acc, item: any) => (acc += item[1].count),
      0
    );
  }, [basket]);

  const amount = useMemo(() => {
    return Object.entries(basket).reduce(
      (acc, item: any) => (acc += item[1].count * item[1].price),
      0
    );
  }, [basket]);

  const onBasketClick = () => {
    setActive(true);
  };

  const onCloseClick = () => {
    setActive(false);
  };

  const form = useFormik({
    initialValues: {
      fullName: ''
    },
    onSubmit: null
  });

  const onEmailChange = value => {
    setEmail(value);
  };

  const onAddClick = (id: string) => {
    dispatch(addItemCount(id));
  };

  const onMinusClick = (id: string) => {
    dispatch(deleteItemCount(id));
  };

  const onDeleteClick = (id: string) => {
    dispatch(deleteItem(id));
  };

  const onSubmitClick = () => {
    setSubmittedBasket(true);
  };

  const onBackClick = () => {
    setSubmittedBasket(false);
  };

  const onSendToEmailClick = () => {
    setTimeout(() => {
      dispatch(basketSubmit());
    }, 4000);
    setSendToEmail(true);
  };

  return {
    sendToEmail,
    onSendToEmailClick,
    productsCount,
    onSubmitClick,
    onBasketClick,
    onAddClick,
    onBackClick,
    onEmailChange,
    email,
    onDeleteClick,
    submitted,
    amount,
    form,
    onMinusClick,
    active,
    onCloseClick,
    products: Object.values(basket)
  };
};

export { useBasketProps };
