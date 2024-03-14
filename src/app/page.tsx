import { Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import MainPainting from "./images/Felice Casorati (Italian, 1883-1963) A Student, c.1910 Oil on plywood panel Museum of Fine Arts, Boston..jpg";

export default function Home() {
  const buttonStyle =
    "text-3xl w-full bg-red-600 hover:bg-red-700 active:bg-red-700 mt-10 py-5";
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
        <Grid item xs={4} className="flex flex-col justify-between">
          <div>
            <Typography variant="h5" className="text-3xl">
              <strong>
                <em>A Student</em>
              </strong>{" "}
              by <strong>Felice Casorati</strong>
            </Typography>
            <Typography variant="body2" fontStyle="italic" textAlign="right">
              Around 1930
            </Typography>
            <Typography variant="body1" textAlign="justify">
              Felice Casorati’s oil painting A Student depicts a pupil in a
              studio setting. Holding a palette with a hand on their hip, this
              student seems to be thinking or reflecting on something in front
              of them. What do you think the student is looking at?
            </Typography>
          </div>

          <div>
            <Button className={buttonStyle} variant="contained">
              Vote
            </Button>
            <Button className={buttonStyle} variant="contained">
              Create Your Own
            </Button>
          </div>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </main>
  );
}
