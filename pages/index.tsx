import Head from "next/head";
import styled, { css } from "styled-components";
import Card, { StyledHeader as CardHeader } from "../components/Card";
import Container from "../styled/Center";
import { useRouter } from "next/router";
import { MdOutlineFitnessCenter as FitnessIcon, MdOutlineNoteAdd as NoteIcon } from "react-icons/md";
import { RiMentalHealthLine as MentalIcon } from "react-icons/ri";

const [Mental, Fitness, Note] = [MentalIcon, FitnessIcon, NoteIcon].map(
  (icon) =>
    styled(icon)`
      width: 70%;
      height: 70%;
      margin: auto;
    `
);

const containerBaseStyle = css`
  gap: 10px;
  flex-wrap: wrap;
  align-content: center;

  > * {
    margin: 0 5px;
  }
`;

const Home = () => {
  const { push } = useRouter();

  return (
    <>
      <Head>
        <title>HOME</title>
      </Head>
      <Container $direction="row" $baseStyle={containerBaseStyle}>
        <Card onClick={() => push("/mental")}>
          <Mental />

          <CardHeader>MENTAL HEALTH</CardHeader>
        </Card>

        <Card onClick={() => push("/fitness")}>
          <Fitness />

          <CardHeader>FITNESS</CardHeader>
        </Card>

        <Card onClick={() => push("/todo")}>
          <Note />

          <CardHeader>NOTE</CardHeader>
        </Card>
      </Container>
    </>
  );
};

export default Home;
