// const resolucao = (choiseUser, numUser) => {
//   if (
//     (choiseUser === "impar" || choiseUser === "par") &&
//     numUser >= 0 &&
//     !isNaN(numUser)
//   ) {
//     const numComputer = Math.floor(Math.random() * 6);
//     const sum = numComputer + +numUser;
//     const result = sum % 2 === 0 ? "par" : "impar";

//     console.log(`${
//       result === choiseUser ? "USUÁRIO VENCEU!!!" : "COMPUTADOR VENCEU!!!"
//     }
//         Escolhas do usuário: "${choiseUser}" - "${+numUser}";
//         Escolhas do computador: "${
//           choiseUser === "par" ? "impar" : "par"
//         }" - "${numComputer}";
//         Resultado: "${result}" - "${sum}"`);
//   } else {
//     console.log("Digite sua escolha (par ou impar) e um número maior que zero");
//   }
// };

const resolucao = (choiseUser, numUser) => {
  if ((choiseUser !== "impar" && choiseUser !== "par") || isNaN(numUser) || numUser < 0) {
    console.log("Digite sua escolha (par ou impar) e um número maior que zero");
    return;
  }
  const numComputer = Math.floor(Math.random() * 6);
  const sum = numComputer + +numUser;
  const result = sum % 2 === 0 ? "par" : "impar";

  console.log(`${
    result === choiseUser ? "USUÁRIO VENCEU!!!" : "COMPUTADOR VENCEU!!!"
  }
        Escolhas do usuário: "${choiseUser}" - "${+numUser}";
        Escolhas do computador: "${
          choiseUser === "par" ? "impar" : "par"
        }" - "${numComputer}";
        Resultado: "${result}" - "${sum}"`);
};

resolucao(process.argv[2], process.argv[3]);
