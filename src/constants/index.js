import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";
import port04 from "../assets/img/port04.jpg";
import port05 from "../assets/img/port05.jpg";
import port06 from "../assets/img/port06.jpg";
import port07 from "../assets/img/port07.jpg";
import port08 from "../assets/img/port08.jpg";
import port09 from "../assets/img/port09.jpg";
import port10 from "../assets/img/port10.jpg";

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
    title: "Vue,Vite,Typescript를 이용한 AMR DashBOR 제작",
    code: "https://github.com/webstoryboy/port2023-vite",
    view: "",
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
    code: "https://github.com/kimsangjunv1/-React-Portfolio",
    view: "https://portfoliosj-react.netlify.app",
    name: "김동현 포트폴리오",
  },
  {
    num: "02",
    title: "Emotion Diary",
    desc: "React를 처음 배우면서 들은 강의의 결과물입니다. 원 소스는 Javasrcipt였으나 Typesrcipt를 더 면밀히 공부해보기 위해 언어를 바꿔서 다시 작업했습니다",
    img: port02,
    code: "https://github.com/seolhee313/PORTFOLIO-REACT",
    view: "https://portfolio-313.web.app/",
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
    num: "04",
    title: "모던한 포트폴리오",
    desc: "블랙 컨셉과 애니메이션이 돋보이는 포트폴리오 사이트입니다. GSAP를 통한 애니메이션과 NEXT.js를 통해 제작된 포트폴리오입니다. pin 애니메이션을 통한 포폴 작업물의 표현 능력이 돋보이는 사이트입니다.",
    img: port04,
    code: "https://github.com/dlgnsrb227/portfolio-next",
    view: "https://hoongportfolio-next.netlify.app/",
    name: "이훈* 포트폴리오",
  },
  {
    num: "05",
    title: "가로모드의 정석 포트폴리오",
    desc: "이 포트폴리오는 가로모드를 통해 눈에 띄는 애니메이션 효과를 가진 멋진 작품들이 펼쳐집니다. 세션 간의 부드러운 전환과 흥미로운 움직임이 사용자들에게 색다른 경험을 선사합니다. 사이트에는 탁월한 디자인과 창의적인 애니메이션들이 어우러져, 사용자들에게 인상적인 시각적인 효과를 줍니다. 애니메이션은 적절히 사용되어 사이트를 더욱 생동감 있게 만들어주는 포트폴리오입니다.",
    img: port05,
    code: "/",
    view: "https://junseungpark.github.io/portfolio/index3.html",
    name: "박준* 포트폴리오",
  },
  {
    num: "06",
    title: "화려함의 정석 포트폴리오",
    desc: "화려하고 세련된 디자인과 다채로운 색상이 사용된 포트폴리오는 사용자를 홀릴 듯한 시각적인 매력을 지니고 있습니다. 포트폴리오 내의 각 작품들은 디테일한 디자인과 탁월한 시각적 표현력을 갖추고 있어, 주인공의 뛰어난 예술적 감각을 느낄 수 있습니다. 화려한 애니메이션 효과와 부드러운 전환은 사이트를 더욱 생동감 있게 만들어주며, 사용자들에게 색다른 경험을 선사합니다.",
    img: port06,
    code: "/",
    view: "https://webstoryboy.github.io/port2023/portfolio-student/DavidYang/index.html",
    name: "포트폴리오",
  },
  {
    num: "07",
    title: "패럴랙스 정석 포트폴리오",
    desc: "마치 예술작품을 감상하는 듯한 환상적인 경험을 선사하는 포트폴리오입니다. 패럴랙스 스크롤링을 활용하여 구성된 사이트는 사용자들에게 독특하고 멋진 시각적 효과를 제공합니다. 배경과 움직이는 요소들이 조화롭게 어우러져, 사이트 전반에 걸쳐 깊이와 입체감을 느낄 수 있습니다. 스크롤에 따라 움직이는 요소들은 마치 세계를 탐험하는 듯한 느낌을 주며, 사용자들을 끌어들이는 매력적인 요소로 작용합니다.",
    img: port07,
    code: "/",
    view: "https://webstoryboy.github.io/port2023/portfolio-student/TaeyongLee/index.html",
    name: "포트폴리오",
  },
  {
    num: "08",
    title: "트랜지션 포트폴리오",
    desc: "화면 전환과 요소들의 흐름이 순조롭고 매끄러운 작품들로 가득한 포트폴리오 사이트입니다. 페이지 간의 트랜지션은 마치 이야기를 풀어내는 듯한 흥미진진한 경험을 선사합니다. 트랜지션 효과의 적절한 활용은 작품들을 보다 동적이고 생동감 있게 만들어줍니다. 각 페이지의 이동이 자연스럽고 사용자들이 원활하게 사이트를 탐색할 수 있도록 배려된 구성은 개발자의 디자인 능력을 잘 보여주는 특징입니다.",
    img: port08,
    code: "/",
    view: "https://webstoryboy.github.io/port2023/portfolio-student/HyunroKim/index.html",
    name: "포트폴리오",
  },
  {
    num: "09",
    title: "스크롤의 정석 포트폴리오",
    desc: "스크롤링을 활용하여 훌륭한 사용자 경험을 선사하는 포트폴리오 사이트입니다. 스크롤을 내리면서 작품들이 순차적으로 나타나고 효과적으로 전환되는 것은 마치 예술적인 이야기를 읽어나가는 듯한 느낌을 주며 사용자를 매료시킵니다. 스크롤의 움직임을 통해 작품들이 서서히 드러나고, 각 페이지 간의 전환은 자연스럽고 부드럽습니다. 이러한 트랜지션과 애니메이션들이 작품들의 내용과 테마를 더욱 강조해줍니다.",
    img: port09,
    code: "/",
    view: "https://webstoryboy.github.io/port2023/portfolio-student/ChoJaeHyung/index.html",
    name: "포트폴리오",
  },
  {
    num: "10",
    title: "모던함의 정석 포트폴리오",
    desc: "현대적이고 세련된 디자인으로 가득한 포트폴리오 사이트입니다. 모던한 느낌과 세심한 디테일이 조화를 이루며, 사용자에게 신선하고 품격 있는 경험을 제공합니다. 사이트의 디자인은 깔끔하고 단정하면서도 특유의 감성과 풍부한 표현력이 느껴집니다. 간결한 레이아웃과 모던한 색상 선택은 주인공의 디자인 감각을 잘 보여주는 특징입니다.",
    img: port10,
    code: "/",
    view: "https://webstoryboy.github.io/port2023/portfolio-student/JooHyeji/index.html",
    name: "포트폴리오",
  },
];

export const contactText = [
  {
    link: "https://open.kakao.com/o/gM7YLzwf",
    title: "KAKAO : webstupids",
  },
  {
    link: "mailto:webstoryboy@naver.com",
    title: "mail : webstoryboy@naver.com",
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
  {
    title: "blog",
    desc: "블러그에 오시면 더 많은 정보를 볼 수 있습니다.",
    link: "https://webstoryboy.co.kr",
  },
  {
    title: "gsap",
    desc: "GSAP에 오시면 더 많은 강의를 볼 수 있습니다.",
    link: "https://www.youtube.com/playlist?list=PL4UVBBIc6giL8-6jvrClimg0cFL-Muqiq",
  },
  {
    title: "react",
    desc: "리액트로 만든 사이트를 같이 만들어 봅니다.",
    link: "https://github.com/webstoryboy/port2023-react",
  },
  {
    title: "vue",
    desc: "뷰로 만든 사이트를 같이 만들어 봅니다.",
    link: "https://github.com/webstoryboy/port2023-vue",
  },
  {
    title: "next",
    desc: "넥스트로 만든 사이트를 같이 만들어 봅니다.",
    link: "https://github.com/webstoryboy/port2023-next",
  },
];
