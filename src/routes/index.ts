import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  let age: number = 40;
  let showOld: boolean = false;
  if (age > 50) {
    showOld = true;
  }

  res.render("home", {
    name: "Bruno",
    lastName: "Sousa",
    showOld,
    products: [
      { title: "Produto X", price: 10 },
      { title: "Produto Y", price: 15 },
      { title: "Produto W", price: 20 },
    ],
    frasesDoDia: [
      "Alguma coisa muito leagl",
      "outra coisa muita qualuqer",
      "dias de luta, dias de gloria",
    ],
  });
});

router.get("/contato", (req: Request, res: Response) => {
  res.send("Formulário de Contato");
});

router.get("/sobre", (req: Request, res: Response) => {
  res.send("Pagina institucional sobre a impresa");
});

router.get("/noticias", (req: Request, res: Response) => {
  res.send("Pagina de noticias sobre a impresa");
});

export default router;
