import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { Button } from "../components/button";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <Button onClick={() => router.back()}>Go Back</Button>

      <H1>Another route</H1>

      <p>
        Styles should be code-splitted, loaded only when the route is loaded.
      </p>

      <p>
        The button is loaded on the main route also, so it should not be fetched
        twice.
      </p>
    </main>
  );
}

const H1 = styled.h1`
  max-width: 75vw;
  font-size: 1.5rem;
`;
