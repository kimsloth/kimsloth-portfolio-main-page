import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";

import Skill1 from "../assets/img/Skill1.png";

const Experience =
  "● SFM.고도화 개발(AMR 관제 프로그램) \n - 울산 BMA (SFM 추가개발) \n - 삼성 SDS( SFM 추가개발)\n● SetupTool 개발 및 유지보수, 고도화  \n● 울산 현대모비스 관제프로그램 개발 및 운영, 오류 대응, 고객사 응대\n● 삼성SDS SFS(Fulfillment 관리 페이지)\n● MKC 현장 셋팅 및 테스트\n● 청주 LS공장 추가 작업 및 유지보수";

const project1 =
  "● RobotPage 기획 및 개발  \n - LS 출장으로 인해 출장지에서 MockAPI를 사용하여 작업함으로써 개발기간 단축   \n - Lifecycle를 이용한 데이터 갱신으로 페이지 로딩 속도 감소";

const project2 =
  "● RobotPage 기획 및 개발  \n - LS 출장으로 인해 출장지에서 MockAPI를 사용하여 작업함으로써 개발기간 단축   \n - Lifecycle를 이용한 데이터 갱신으로 페이지 로딩 속도 감소";

export const headerNav = [
  {
    title: "intro",
    url: "#intro",
  },
  {
    title: "skill",
    url: "#skill",
  },
  {
    title: "site",
    url: "#site",
  },
  {
    title: "portfolio",
    url: "#port",
  },
  {
    title: "contact",
    url: "#contact",
  },
];

export const introText = {
  title: "port developer",
  desc: ["talent is", "found at the end of the", "effort"],
};

export const experience = [
  {
    title: "2021.01~2023.06(2년 5개월)",
    desc: Experience,
    img: Skill1,
    name: "Syscon",
  },
];

export const project = [
  {
    title: "2021.01~2023.06(2년 5개월)",
    desc: project1,
    skillstasck: [
      { stask: "Vue3" },
      { stask: "Vite" },
      { stask: "TypeScript" },
      { stask: "Sping.Boot" },
    ],
    name: "울산 BMA",
  },
  {
    title: "2021.01~2023.06(2년 5개월)",
    desc: Experience,
    skillstasck: [
      { stask: "dsdsd" },
      { stask: "dd" },
      { stask: "fff" },
      { stask: "gg" },
    ],
    name: "Syscon",
  },
  {
    title: "2021.01~2023.06(2년 5개월)",
    desc: Experience,
    skillstasck: [
      { stask: "dsdsd" },
      { stask: "dd" },
      { stask: "fff" },
      { stask: "gg" },
    ],
    name: "Syscon",
  },
  {
    title: "2021.01~2023.06(2년 5개월)",
    desc: Experience,
    skillstasck: [
      { stask: "dsdsd" },
      { stask: "dd" },
      { stask: "fff" },
      { stask: "gg" },
    ],
    name: "Syscon",
  },
];

export const siteText = [
  {
    text: ["make", "site compliant with", "webstandard"],
    title: "리액트를 이용한 포트폴리오 사이트 제작",
    code: "https://github.com/kimsloth/kimsloth-portfolio-main-page",
    view: "https://kimsloth-portoflio-project.web.app/",
    info: [
      "site coding",
      "production period : one week",
      "use stack : HTML5/CSS3, CSS Variable, Vite",
    ],
  },
  {
    text: ["make", "site compliant with", "react.js"],
    title: "리액트를 이용한 사이트 제작",
    code: "https://github.com/webstoryboy/port2023-react",
    view: "https://port2023-react.netlify.app",
    info: [
      "site coding",
      "production period : three week",
      "use stack : HTML5/CSS3, CSS Variable, react",
    ],
  },
];

export const portText = [
  {
    num: "01",
    title: "AMR Dashborard",
    desc: "Grid Layout 과 konva를 사용한 AMR 대시보드입니다. 처음으로 React를 써서 작업했으며 회사에서 팀원들과 협업 하던거와 달리 기획부터 코딩까지 혼자 작업한 결과물입니다.",
    img: port01,
    code: "https://github.com/kimsloth/AMR_Dashborde_Portfolio",
    view: "https://kimsloth-dashboard-project.web.app/",
    name: "김동현 포트폴리오",
  },
  {
    num: "02",
    title: "Emotion Diary",
    desc: "React를 처음 배우면서 들은 강의의 결과물입니다. 원 소스는 Javasrcipt였으나 Typesrcipt를 더 면밀히 공부해보기 위해 언어를 바꿔서 다시 작업했습니다",
    img: port02,
    code: "https://github.com/kimsloth/Emotion_Diary_Portfolio",
    view: "https://kimsloth-emotiondiary-portfolio.web.app/",
    name: "천설* 포트폴리오",
  },
  {
    num: "03",
    title: "준비중",
    desc: "준비중입니다",
    img: port03,
    code: undefined,
    view: undefined,
    name: undefined,
  },
  {
    num: "04",
    title: "준비중",
    desc: "준비중입니다",
    img: port03,
    code: undefined,
    view: undefined,
    name: undefined,
  },
  {
    num: "05",
    title: "준비중",
    desc: "준비중입니다",
    img: port03,
    code: undefined,
    view: undefined,
    name: undefined,
  },
  {
    num: "06",
    title: "준비중",
    desc: "준비중입니다",
    img: port03,
    code: undefined,
    view: undefined,
    name: undefined,
  },
  {
    num: "07",
    title: "준비중",
    desc: "준비중입니다",
    img: port03,
    code: undefined,
    view: undefined,
    name: undefined,
  },
  {
    num: "08",
    title: "준비중",
    desc: "준비중입니다",
    img: port03,
    code: undefined,
    view: undefined,
    name: undefined,
  },
  {
    num: "09",
    title: "준비중",
    desc: "준비중입니다",
    img: port03,
    code: undefined,
    view: undefined,
    name: undefined,
  },
  {
    num: "10",
    title: "준비중",
    desc: "준비중입니다",
    img: port03,
    code: undefined,
    view: undefined,
    name: undefined,
  },
];

export const contactText = [
  {
    link: "mailto:dh8129@naver.com",
    title: "mail : dh8129@naver.com",
  },
];

export const footerText = [
  {
    title: "youtube",
    desc: "유튜브에 오시면 더 많은 강의를 볼 수 있습니다.",
    link: "https://www.youtube.com/@Webstoryboy",
  },
  {
    title: "github",
    desc: "깃헙에 오시면 더 많은 소스를 볼 수 있습니다.",
    link: "https://github.com/webstoryboy",
  },
];
