import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  card: {
    background: " #667db6",
    background:
      "-webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)",
    background:
      " linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)",
    webkitBoxShadow: "5px 5px 15px 5px #202020",
    boxShadow: "5px 5px 15px 5px #202020",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "70vh",
    padding: "10%",
    borderRadius: 15,
    color: "white",
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  container: {
    padding: "5%",
    width: "100%",
    margin: 0,
  },
});
