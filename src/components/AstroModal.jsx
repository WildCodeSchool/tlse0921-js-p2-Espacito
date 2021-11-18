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
      <BackgroundModal onClick={() => setShowModal(false)}>
        <ModalWrapper showModal={showModal}>
          <ModalImage src={image} alt={name} />
          <ModalContent>
            <h1>{name}</h1>
            <h2>{country}</h2>
            <h2>{agency}</h2>
            <h2>{position}</h2>
            <h2>{spacecraft}</h2>
            <Wikibutton>
              <a href={url} target="_blank" rel="noreferrer">
                Lien Wikipédia
              </a>
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
      </BackgroundModal>
    ) : null}
  </>
);

const BackgroundModal = styled.div`
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
  width: 95%;
  box-shadow: 0 5px 16px rgba(0 0 0 /20%);
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  overflow: hidden;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 50%;
    margin: 0 5px;
    text-align: center;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.5rem 0;
  line-height: 1.5;
  font-size: 11px;
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

  @media (min-width: 768px) {
    line-height: 3;
  }
`;

const Wikibutton = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  margin: 15px 0;
  border-radius: 4px;
  border: none;
  background: #041844ff;
  color: white;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: #7b7fda;
    color: #041844ff;
  }

  a {
    color: #fff;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  font-size: 15px;
  border: none;
  background-color: #fff;

  @media (min-width: 768px) {
    top: 20px;
    right: 20px;
    font-size: 25px;
  }
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
