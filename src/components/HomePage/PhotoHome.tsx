import styled from "styled-components";

const PhotoContainer = styled.div`
  max-width: 19rem;
  max-height: 19rem;
  border-radius: 50%;
  filter: brightness(0.85);
  box-shadow: 10px 10px 15px 10px rgba(0, 0, 0, 0.5);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
`;

function PhotoHome() {
  return (
    <PhotoContainer>
      <Image src="src/assets/Profile_Image.jpg" />
    </PhotoContainer>
  );
}

export default PhotoHome;
