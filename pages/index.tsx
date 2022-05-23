import Head from "next/head";
import styled, { css } from "styled-components";
import Card, { StyledHeader as CardHeader } from "../components/Card";
import Container from "../styled/Center";
import { useRouter } from "next/router";
import { MdOutlineFitnessCenter as FitnessIcon, MdOutlineNoteAdd as NoteIcon } from "react-icons/md";
import { RiMentalHealthLine as MentalIcon } from "react-icons/ri";
import useKeyPressRoute from "@/hooks/useKeyPressRoute";
import useGetGenerals, { useGetGeneral } from "@/hooks/queries/useGetGenerals";

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

const HOME_ITEMS = [
  { text: "mental", headers: "MENTAL HEALTH", Page: Mental },
  { text: "fitness", headers: "FITNESS", Page: Fitness },
  { text: "note", headers: "NOTE", Page: Note }
];

const Home = () => {
  const { push } = useRouter();

  const handleKeyPress = useKeyPressRoute();

  const idAll = useGetGeneral("1");
  const all = useGetGenerals();

  [idAll, all].forEach(console.log);

  return (
    <>
      <Head>
        <title>HOME</title>
      </Head>

      <Container $direction="row" $baseStyle={containerBaseStyle}>
        {HOME_ITEMS.map(({ text, ...Item }) => (
          <Card key={text} onClick={() => push(`/${text}`)} onKeyDown={(e) => handleKeyPress(e, text)} tabIndex={0}>
            <Item.Page />

            <CardHeader>{text}</CardHeader>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default Home;
