import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useTranslation } from 'react-i18next'


const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  const { t } = useTranslation();
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/login'>
            <Nav.Link>{t('signin')}</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>{t('signin')}</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <Nav.Link>{t('shipping')}</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>{t('shipping')}</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/payment'>
            <Nav.Link>{t('payment')}</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>{t('payment')}</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link>{t('place_order')}</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>{t('place_order')}</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps
