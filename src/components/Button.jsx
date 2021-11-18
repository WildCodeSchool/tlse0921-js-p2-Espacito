import styled from 'styled-components';

const Buttonwhite = styled.button`
  min-width: ${(props) => props.minWidth || '100px'};
  padding: ${(props) => props.paddingButton || '16px 32px'};
  border-radius: 4px;
  border: none;
  background: ${(props) => props.colorButton || 'blue'};
  color: ${(props) => props.textButton || 'blue'};
  font-size: ${(props) => props.fontSize || '20px'};
  cursor: pointer;

  &:hover {
    background-color: #7b7fda;
    color: #041844ff;
  }

  @media (max-width: 1271px) {
    margin-bottom: 10px;
    color: #7b7fda;
    color: #041844ff;
  }
`;

export default Buttonwhite;
