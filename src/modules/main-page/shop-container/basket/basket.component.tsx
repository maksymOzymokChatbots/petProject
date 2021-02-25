import * as React from 'react';
import { useBasketProps } from './basket.props';
import * as styles from './basket.scss';
import { Icon, Form, Field, Button } from '@core';
import { hoc } from '@core/utils';
import { CountController } from '../count-controller';
import { Product } from './product';

/**
 * Renders Basket
 */
const Basket = hoc(
  useBasketProps,
  ({
    productsCount,
    active,
    onBasketClick,
    amount,
    submitted,
    onCloseClick,
    onSubmitClick,
    onBackClick,
    email,
    onEmailChange,
    onMinusClick,
    onDeleteClick,
    sendToEmail,
    onSendToEmailClick,
    products,
    onAddClick
  }) =>
    active ? (
      <div className={styles.overlay}>
        <div className={styles.form}>
          <Icon className={styles.close} name='close' onClick={onCloseClick} />
          {!submitted ? (
            <div>
              <div className={styles.header}>Осталось несколько шагов...</div>
              <div className={styles.products}>
                {products.map(({ count, imgLink, id, price }) => (
                  <Product
                    count={count}
                    id={id}
                    img={imgLink}
                    price={price}
                    onDelete={onDeleteClick}
                    onMinus={onMinusClick}
                    onAdd={onAddClick}
                  />
                ))}
              </div>
              <hr />
              <div className={styles.amount}>{amount} UAH</div>
              <Button
                theme='primary'
                animated
                className={styles.submit}
                onClick={onSubmitClick}
              >
                Продолжить
              </Button>
            </div>
          ) : (
            <div className={styles.emailForm}>
              {!sendToEmail && (
                <Icon
                  className={styles.back}
                  name='arrow-left2'
                  onClick={onBackClick}
                />
              )}
              {sendToEmail && (
                <div className={styles.success}>
                  Спасибо, в ближайшее время с Вами свяжется наш менеджер.
                </div>
              )}
              {!sendToEmail && (
                <>
                  (
                  <div className={styles.caption}>
                    Для подтверждения заказа введите свой e-mail
                  </div>
                  <input
                    type='text'
                    value={email}
                    onChange={event => onEmailChange(event.target.value)}
                    className={styles.input}
                  />
                  <Button
                    theme='primary'
                    animated
                    onClick={onSendToEmailClick}
                    className={styles.submitEmail}
                  >
                    Подтвердить заказ
                  </Button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    ) : (
      <div className={styles.basket} onClick={onBasketClick}>
        <Icon name='cart' />
        <div className={styles.basketCount}>{productsCount}</div>
      </div>
    )
);

export { Basket };
