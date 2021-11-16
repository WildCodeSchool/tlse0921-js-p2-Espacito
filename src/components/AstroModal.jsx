import styled, { createGlobalStyle } from 'styled-components';

const AstroModal = ({
  showModal,
  setShowModal,
  name,
  country,
  image,
  agency,
  position,
  spacecraft,
  url,
}) => (
  <>
    {showModal ? (
      <Background>
        <ModalWrapper showModal={showModal}>
          <ModalImg src={image} alt={name} />
          <ModalContent>
            <h1>{name}</h1>
            <h2>{country}</h2>
            <h2>{agency}</h2>
            <h2>{position}</h2>
            <h2>{spacecraft}</h2>
            <Wikibutton>
              <a href={url}>Lien Wikipédia</a>
            </Wikibutton>
          </ModalContent>
          <CloseModalButton
            aria-label="Close modal"
            onClick={() => setShowModal((prev) => !prev)}
          >
            X
          </CloseModalButton>
        </ModalWrapper>
        <AstroModalStyle />
      </Background>
    ) : null}
  </>
);

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0 0 0 /80%);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 50%;
  box-shadow: 0 5px 16px rgba(0 0 0 /20%);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 3;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const Wikibutton = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #041844ff;
  color: white;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: #7b7fda;
    color: #041844ff;
  }

  a {
    color: #fff;
  }
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  font-size: 25px;
  border: none;
  background-color: #fff;
`;

const AstroModalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      border-radius: 4px;
    }
  `;

export default AstroModal;
