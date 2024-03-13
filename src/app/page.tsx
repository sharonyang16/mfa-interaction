import { Grid } from "@mui/material";
import Image from "next/image";
import MainPainting from "./images/Felice Casorati (Italian, 1883-1963) A Student, c.1910 Oil on plywood panel Museum of Fine Arts, Boston..jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <Grid container spacing={2} className="w-full">
        <Grid item xs={4}>
          <Image
            src={MainPainting}
            width={500}
            height={500}
            alt={`Felice Casorati's "A Student"`}
          />
        </Grid>
        <Grid item xs={4}>
          {" "}
        </Grid>
        <Grid item xs={4}>
          {" "}
        </Grid>
      </Grid>
    </main>
  );
}
