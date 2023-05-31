import { Container } from './styles';

export function Textarea({ value, onChange, ...rest }) {
  return (
    <Container {...rest}>
      <textarea value={value} onChange={onChange}/>
    </Container>
  );
}