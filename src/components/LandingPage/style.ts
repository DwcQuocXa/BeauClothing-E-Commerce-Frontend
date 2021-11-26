import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export default makeStyles((theme: Theme) => ({
  background: {
    width: "100%",
    height: "101vh",
    backgroundImage: `url('https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fba%2F2d%2Fba2d20f86f00714e94743686fd11bf1bf4066ca4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_coats%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'),
    url('https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4a%2F96%2F4a961ee5c94abdb3ec19f5bc4905612606063211.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_jackets%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'),
    url('https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbf%2Fdd%2Fbfdde86a156efe7485fe0bc278ca152456f58279.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_longsleeved%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]')`,
    backgroundSize: "contain",
    backgroundAttachment: "fixed",
    backgroundPosition: "right, center, left",
    backgroundRepeat: "no-repeat",
  },
  newCollection: {
    width: "100%",
    textAlign: "center",
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  title: {
    color: "white",
    fontWeight: 600,
    fontFamily: "Lucida Console",
    textTransform: "uppercase",
  },
  introduction: {
    position: "absolute",
    top: "85%",
    left: "15%",
    transform: "translate(-35%, -50%)",
  },
  introductionText: {
    color: "white",
  },
  shopAllBtn: {
    color: "white",
    fontSize: "large",
  },
}));
