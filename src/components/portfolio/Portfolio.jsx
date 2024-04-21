import { useRef } from "react";
import "./portfolio.scss";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";

const item = [
  {
    id: 1,
    title: "Ramble On",
    img: "https://img.freepik.com/premium-vector/chat-app-logo-sms-messenger-label-design-mobile-app-online-conversation-with-texting-message-ui-design-concept-vector-illustration_172533-1513.jpg",
    description: "Chat App",
  },
  {
    id: 2,
    title: "NBA Trivia Game",
    img: "https://icebreakerideas.com/wp-content/uploads/2020/09/Nba-Trivia-e1608679522119.jpg",
    description: "NBA Trivia Game",
  },
  {
    id: 3,
    title: "NBA Stats App",
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUVFRAVFxUVFRUYFRYWFhUVFRUYHSggGBolGxUXITEhJSorLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGy0lHyUtLS0tLS8tLS0tKy0tLi0tLS8tLy0tLS0tNS0tLS0tLS0tLS0tLS0tLS0tLS8tLS0tK//AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAgADBAUGB//EADsQAAEDAgQDBAgFBAEFAAAAAAEAAhEDIQQSMUEFUWEicYGhBhMykbHB0fAUI0JS4WJykvGCFTNDU8L/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QALhEAAgIBAwIEBQQDAQAAAAAAAAECEQMSITEEQRMiUfBhcYGR0QXB4fEUobFC/9oADAMBAAIRAxEAPwD40E4CQJ2oGMmCCISGFMllEFAAIQTFKEASVJRLUIQAEYTKQgCshSFYGoEJiEhSE0JgEAJlQyq7KhkTApLUcqsypg1AijKpCuLUhagCrKjlVoaplQBXCmVPCZlOfmeSBrcryWlJlV7xsPfzShh2QN8leVAhWubFkpYgRVCkKwthLCAFISpylQAqiKiACE4SBOEgHBRStThIYJRlAlQIAaVEE4QAAnISp0AJCICYBWNpyNNNTy70AVhqBatDKavw9FocC8S2ZI5jlKpITdGEUinbSK9UMuKnJh2UwyAHMblDueYTciBfW99kBwJzjDRJ0gKtJKlas8yKShpr3lLgPqQWBrHVJGapUa1zWiBIYx0zc+1EnaLymI9H6L3flucCR7JYIc4DUBvsAxpeJRQlJM8GGIli9OfRp+r+w3XOeXRu56LDX4dlMAyNjEeV4U2ro00Sqzi5EHU10W4Uyo/B9Ew0s5opp/VHXbmurhOH2LnWA5/f3K6zaNJrIcM2YSWknnIHMbKXKioY3I8xg8EajomALl0EwO7c30V2LwjhDWtIbzMST/VGncus9opthoy5jPWOZ9596tw9VjGZjvNxqR0Pkoc+5vDDfl+5x6fCCLvIA3AMnxOgVeIoBsxv9+5bKtYuBe45WzYXjujcrC6rbMRa8Tuf4RG3yE4wjx/JldSPgPcqzaw960G4VFQhaHO9uCkoEJigUECFKU5SlAxFEYUQAEwShMEgGBVgVQVgKQwFEFQhAIAsBRSBMEAOArmU0lNsrRTEKkikhgwnUk9Tr0T08MSVpp2WkUouqUSZPcTC4GTB05r1fD/RnMCZa1oEl7rARrMXXD4biIMZA42sZ5jkV9GOGmg1jiGSRmAJJ2LmiJJdqLSt8WNO2+x5vWdVLE4xit5Ov5ONgqNBvZbUzgTMCI6RMwdF3eGYckyabKYGjtCf7Zm3XlKwf9sZaTGsHNxv4Mb87p24x29UeDPq5cWfq1B1FHq9L+nznG8jfv7Gwej2Z5c6rZwEi5uPHqVqHo+IgVR/ifjKow9d8WqNPQsPxDlrbjKjfap5hzpuzH/F0H3SuT/InPujt/xYY+zJU9HGuAFjEwSSNYmRGll5zinog5hJ1BOseQ/lerw/FGPkNdcatMhw72m4Tv4hCzeVx5NoQ1cbnhsb6MNa0HM4vP6QBlB79fFU4TgVKQxwealidGsbNwIgk6je/mvYHiTRUa2BDwQ0i0OaC7LbYtDj/wATzWbjGMykZW5W61Kxueo581i+oy8Xz3NYYISlWnc8bxbhopXdBucrRpDf1O59B3rjsYXOLn2YASTp3AdSYC7nHeL0XRknYuJDQHQLSB47rhVs1SCXNYyYGZwbmI1gG5j5rtjk1Rtky6dQdVuZvUuqP0toB8rJn8PqPdliwiSdB9AAuvTweUQwyI1n2puLxv8AeypxVYU25ZufaIU+JbVG3gJQerb1/Bg4lQphrWgkhs2FgTzJ+XmuJiQXOk6CABsANAFtq183cPPkFSG6k6XJ7guyEaW55OZqT2MlfsgDci/isTl08Vw+plzktkjMaeZucN1ks1AjxXMIVKSfBzzjJcqhUpTFKggBSlElAoGBRRFAysIgpQikIdO0qsIhIZeCplVYKdpQUWBidrEjHLS0ymUkiyixbcNhcxU4dh87g0DWTMwAAJJJNtAvV8P4C+o2WQ1rdHOsDGpn4qopt0hzcYRuTORS4cSWg+HyC6T+DPpnK5va5aiDoeR2W9nBqptLcojNVJIaLjSwJJ7tiuoeDudUMPbkJBzMcRlDbQ4HUnWecrsxYW1dHi9X+oY8cktSqr9/gw+iPDmMdUe89pkDK6Ib1PPoOi6uM4w0k+r/AMjqeQ7uix8YDWnIzNBMkmAXbSSuBisaACGgtbYAHcjUz3yo6m4wrsP9NUMuVZnvJ8fBe/7OjisS6DJmTMpWVCACeXO65tCuHNJLgCNATEx8h9VUOI2AOoMzv8F4+TC9Gtn1eDql4nhL6+7PSYXGEC8mYBA2mN10hxIAwvJMxwOhR/6htPiuNK2ehPHtaZ6fF41r/bEkaOuHN/tcLj3rBieKPpDtE1Kf7wPzGdXNHtjqL9DquG7iHMrLV4geaKfHK9/Yawx5Wz98+p3MNxP1r2VAfyaTg81P3uAOWlT563OwTYviYe05iMsdqdI3leQr4tzZdTNrl1L9J5ub+13ke9HC4zMPWH2Aeyw/+R4v2h+xtif3GBoCrlh1JVsl9/fp/ZnDKscnq3m+PT4V8PX+jsY7hhaRl9ktDurSb5XciLLj8cwRa6mC68d4F5suxwnGB9RranaDnQQTrJkunpEz0S+lPEKVRwADm5SWgiDlbs7+onXZVCUtXG25tJRcHFvelbMLeJtZYagQBsOZ6lcrHY4uMTqsr7Zr3Bj4j5KUKBJld2HGlueV1nUSl5DU0wB9ymxLoYBoTd3cNB4qyQ0dee/hyCzVKDjc6dfkFucDTMtWvcug5jN5tcQSshVtU3toqXFCilwZzySm7kKSlKbv9yVxQTQqBRQQIiiCiBiIpAU0pCGCdVhMCkNDBMEgTSqQy1q10isjAtNORomWjXh/OV7bC8Ue/DjDtpucYI7O7bGZ211tsuRwr0eyw/ElrZEtoF0PduJGy9NRY1oNPMBmDQ5tGAdRDQSZ1tZdGGErs87rc8HHTzQeEBzGfh6kmoTmbSaQHNblB/MdoDDhb/SZ1anTApl7m1D7TZzAQbSbXWSrxGjTqZ2Nc52V5a0EAAdll3DYZfgsdXC1HNNWq8BzgC1r3S5oPabNgDY31XfGWlUjwJYvEy3J0n/38fv3JxGo1zoE1Ise24X1mWkW6rjVKlN5y+qEiZu4zqZnN3qnF1znu4A6iNdtgs1Wuc2YzJvO5jVed1GVy7n0fSYI462XHz3/AOfY6TMPQgn1A1tDngAcj2rFI3C4eLh7CAT2ah27wb9FkoPGYOPsmbb87306pDDszgeyDv5Afey5ZSdV+53whFzb/b6V879DSeE9kPbiHNkkBr2h+nUEGL8kjKOIabGnV/sfldymKkeSyjEnT7+/qo+uRYiFxPVd+/8AVHrqMKq2vr+bJWx5aYqNdTPJ4LZ7idVW/FymOPeBEy3dphzT3tNlidhTUzVKbWsZYZZyhztwwHfyHkqjBPnYjJmnHZO/puW0nZu272AbN/8AY7l/aNz4b2FSqZLxEm7mgAA9QBYHoqXYjNoIi2X9sbQhSIJv7I1HPk369FpRg59+X6nUwWKytzfqeCB/Sw+1/wAnRHQd67GHp06lOXAl0hojUkgn4DzXk3VIJcAIJu0WAJ5cgu/w/FljmhpnLPaH6nH2z3H2R0AWeSH/AKOjpszT0vfuzZW9Hy4k5fVNmQH5szotOlpMrA7CPa/K9pEfo0J5eHVdrEcXrSSXkNFg3Y9QNu9cutxEusfZGg5nqVvjtIjqYapajOGif/o/Bo5LNjKtrffVNUrXt4Dkszr3OgWyPPl8DDUKVjCTYfx1Vvqy4yBYKmpUOg0Q3fBkopbyJUgW8/53VJ6KElCUImUrYFFFEyQKKKIGUhEFBRSA4KIKQFMmA8pmhIFYxNDLqZhdDhzwx7HkAhrmuI5gEE/BYJWp1RpDQ0Ec7zJgX6XnTaFSE32O1xPGP9aarnFziSWToATr3rXg+IuFR0ucahpuOYxZxj2QRIt1XHwuKMAPu0WnKDFrX1sr82YuygZw0kOFzbW0ciuiEmcOXEq3GxONIzgtLc9OzjcuOYEw7w8lq4vxQvyAHKW02DKBYQ0Cw2Me6687jHuJJeYBkjc+WitZVEe1NhvfTQzy0VLI02iV00XUg1auhMnmTe+6NXFTAbERy5663WeriLbC0GN4OpWT1y45yPRhFbM6P4hxt9PvdI+qeZWH1/JTM4/ysHFvdnVHKlwbRX6pH4ra5OgGqzCmNzPQfUrThqwaeyAOX88x0U6EaPNNr0LGUN6vf6oG5/uP6R592qetiS6NgBAaLBo5ALK6pfl05JC5GmylNLgbEkHtD2rD+7+UA60Db3zuT1QoG+blZvfz8PojU/d7/kVXwMm783v5luHcACbEmWtBv0c75eJXa9GqJNVoALoIcBE2BEyuJTpm3QQvTeihy1Gn9Iu6TAPfET3Sss7qDaOjpt8iR6L0gyFpDoc4EaDIACJMNG/T4rxOIYQ4j2hsYjbQ/BfWeJGliWw8Br4llUMIAtHav2uvKN182ivQqPpF0ZSQ8Ayw9ORBHxXJ0fWKcWqprsehmwSnVnLdRzbkDoFlqDL7dwNGjfqteIeGmSbG+Vt+6ToAsDsZLpgDl05eK9JSk/keZkhixrd+YWviy4REDvWZxTVXySYiSTA0EpFolRwznKTtuwJmMmbgQCb7xslUTIQFFECgdEUQlRAymUUsqKSBkwShMAmAQVa1VQrqTExljFY0FRjL9FqoN+9VSE2WYDLmHrJyTJaD0Mb84Xb4VgTVqllKwI7RvDWzc3MBYOF4Y52gAEuMBvPxIjrOy9nTFKhSFOnmN5fUkSSLA9QAJA0v7+nBGzzuszOCpbt/b5s8disA1hc0Nc50/qsLam1j/vVchlMt1FjMT7ivVY7EtYC4kuM2BMxYa+drrz2KqZhmjmY+irIl2Dp8strOc9wB0CrJCaqFWuBrc9ZFmZKXIJSpoeocuUaNzqlY291blSZSt7jSg7RQMlHJePeeQ+vRIttsFPQDp8Vcadj97hVt5j3dF0aFGfFFhV7Aw7POPNehwdL8smBAAg9ZG6wYfCmYHTwsF1zhnNYAGm5sf0knfquTqJ7JI9Loo+ZuRY/HubkJJluY3/4xblZcL0h4oXjK7WQRAAIABF+pXffgvVUXVanZggS4iLm1zy+S8FiX5nuPMmO7byWPRYozm5eh1/qfVqOFQjy/9IQ1JsZjvSHp/KOVKV65827fIqCaUEyaAEFCgkMKBKkpSUACVEEEAIEQFAEwSIIFY0IBM1MCyArGhIraJEpgaKHULo0aLDFyPCQs7XNiw+qZ2JDRa/TkqSMpP0PQ8CwLPXs/MBEwbEC4ggTfQwtfGwaL3A7m45eHNed4XxR4fYxAkARtGm8xJW3ieJLiXPdrcbrohWk4cil4iv0OLxbOHHWJsqJJaBuLR5hbcTj7ENAjnHa9/wAlyi5x3US2Z0402uBYMmf9IPatFVxAgaKhtTYiy55noYXaplMch4n6IZFtFKRINkgoSstRq8TKGFWNdeFop4SNj3KVKV4Gvh5KXJFrHJIQu2Gvw70r9IGmveeZTugRFpldDh9EEg+Z2USnpVmkMbk6MWFboYld3C0C4SG8ogRPTqq6uHZmjMCehBn5eaarxAUxDd7Tb7K53lcn5Tp8FQXmex3MBRLXkk9kC5traAF1sBUcx7nPeCLZWEyRPNeNHFHSPDxv8F2OGj1hu4iDJmdO9cWeEt3I6cbjxE3ellYNpuqTLXtLMmxc4EAx5+C+br0/pZWLS2iCSA3M86iXGWgHpG3PvXnSyxNrRab35Bej0MNGFP19o83q5a8tLsVG956df9KlwVjlWV2o5pCqEqFISmZBJSqEpUAElKUUqBEUUUQAAmalCiCB5TtKqCYIAtzItfCNGgTrYc1a5rRt8U0iWw0STurY5LNmldfheHLmE7Bwv8VSV7EydKynDUiO3odADr1KY1SRcq/EUS25tOk8lmDB+4AeKu62Mq1bgcwazdRjFbkA6k6Kw8oFlLkbQijI6l1WZ9Ndv8KIvrr3cgeu/gs9SiALxz6lZSZ24o2c1ri241V1PE/uaJ5i3vRfHTxSU2Ez8Fk0bqdOrNZYHaDwJv3Kp1NwPslt9YNlMMXTHl8oW806zv1QBzsB3SsJeV8m6alG0n9Dm5CTLj98l0KOFJ9l0eQPRWtaWkAuAMbgHxunqZQQS6QbHLJPjKzk5PguOhcsyV6TrwGu000ncA79ypw+GLjLwbbfIHZdA4ZjW5yewBMNHzMXWNvFHjUNPImZA5WIlXGMmvL+DKeSEZLX+TRh3CmPzGzG/jA5LtYHFNyyXNy9XZRba5k9y8risY6pGaABsLDvjmqfWRunLo9a8z3IXXaXUVsbuM4/1tV7gezMN2kDQ+Nz4rmuKgvuBbe2ipcV1RiopRXY5HJyep9wuKRzkC5BtYiQNxBVEt2LmQc5KUJTJChKCiBEUUUQBFEFEABEIIhIgcBW02gXPuVbBuUZlMDQKhKD1Vmjv5/RM18dU7FRqweHzuAkNG7zoBzjfuXpH4qmwBtMdlosDr1e7+ory1Oty28k7sSSqToznByZsx2NfVeXP8BsBsAqWMLiqW1xyk9V0m1Qxu2Y7cud9ki0q2QWUySGt10nryC0CmKboN3HrZpPxK534y8kiRpAsO4JBiuWvP73UmiidnF1Q3S/Jtve76brDiKo1I6W0WJuIUq1ydfKyRaVFhptO8d4+kq2mG6+48+9YjVU9eRpbuRQJ0dSlUYddR0N/cnxXEXhoDXDnMCT3yPiuN6xB1SdVHhRbtmnjzSpbGt1dzXEh0k3J1mb3WtvFgGEZBm5/p7yNZ8VyMyGZU4RfJKnJcGt9XOXOc4AgSBsdAGgfeirFQRcmREctbyZt5rPmSlyqiLLjUSPeqi5AuQFjlyUuSEoSgBm1CDI25gHyKrlSUEARRRRAiKKKIAiCiiBEUUUSEEBMAoEZTEGFEJUlABhRCVMyAGlRJKmZAy1lSNNeahM3m51VeZEPQUhgSmBKDagVrKils0jFPuKJTQVrw+JYJzNnlyHhaU7sUNsv+IHyUa3fB1LBjq9RhylD1ZW04g8x7wh60/ZVamZvFD1MgpFOKB5LUKp6+9WNrHqlqZPhxMX4Yo/hSukyuevvVwrdR7x9VLyMpYonH/ClT8IV2xXHNvkfkVYMVSg5mgmLZRlv1OnkpeWS7D8GPqefOFSnCrsOqtVbnNVrIyXiXqck4dIaC6biFS4hWpGThRgNFD1S2OIVTinZLRmyIZFeUpKZJTlUyqyUpKBWJCEJyUsoCwIIoIAMqSoogkMoSoogCShKiiAIoookBEZUUTGEFHMoogoOZTOookOwh6IeoogLYwej6xBRA7Y4qphWUUSodsPr0fXqKIoNTJ69D1yKiKHbFNZKaqiidEtimolzoqJkil6UuUUQIBchKCiBEJQJUUSECVFFEgP/9k=",
    description: "NBA Stats App",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-100", "100"]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button onClick={item.Demo}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <motion.div className="progessBar" style={{ scaleX }}></motion.div>
      </div>
      {item.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
