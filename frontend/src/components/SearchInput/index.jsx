import { forwardRef } from 'react';
import { Container } from './styles';

export const SearchInput = forwardRef(({ icon:Icon, className, ...rest }, ref) => {
  return (
    <Container className={className}>
      {Icon && <img src={Icon} />}
      <input {...rest} ref={ref} />
    </Container>
  );
});