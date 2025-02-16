import getImage from "../utils/importImages";

const menuList = [
  [
    { name: "김치찌개", image: getImage("m001") },
    { name: "된장찌개", image: getImage("m002") },
    { name: "순두부찌개", image: getImage("m003") },
    { name: "청국장찌개", image: getImage("m004") },
    { name: "부대찌개", image: getImage("m005") },
    { name: "되비지찌개", image: getImage("m006") },
  ],
  [
    { name: "소세지 옛날도시락", image: getImage("m007") },
    { name: "스팸 옛날도시락", image: getImage("m008") },
    { name: "삼겹 옛날도시락", image: getImage("m009") },
    { name: "우삼겹 옛날도시락", image: getImage("m010") },
    { name: "제육 옛날도시락", image: getImage("m011") },
    { name: "갈비 옛날도시락", image: getImage("m012") },
    { name: "육회 옛날도시락", image: getImage("m013") },
  ],
  [
    { name: "돈까스 옛날도시락", image: getImage("m014") },
    { name: "스팸 옛날도시락", image: getImage("m015") },
    { name: "삼겹 옛날도시락", image: getImage("m016") },
    { name: "우삼겹 옛날도시락", image: getImage("m017") },
    { name: "제육 옛날도시락", image: getImage("m018") },
    { name: "갈비 옛날도시락", image: getImage("m019") },
    { name: "육회 옛날도시락", image: getImage("m020") },
  ],
  [
    { name: "고기 짜글이", image: getImage("m021") },
    { name: "참치 짜글이", image: getImage("m022") },
    { name: "스팸 짜글이", image: getImage("m023") },
    { name: "훈제오리 짜글이", image: getImage("m024") },
    { name: "우삼겹 짜글이", image: getImage("m025") },
    { name: "우삼겹 된장 짜글이", image: getImage("m026") },
    { name: "돈까스 김치나배", image: getImage("m027") },
  ],
  [
    { name: "돈까스덮밥", image: getImage("m028") },
    { name: "갈비덮밥", image: getImage("m029") },
    { name: "제육덮밥", image: getImage("m030") },
    { name: "데리야끼 삼겹덮밥", image: getImage("m031") },
    { name: "데리야끼 우삼겹덮밥", image: getImage("m032") },
    { name: "김치 삼겹덮밥", image: getImage("m033") },
    { name: "김치 스팸덮밥", image: getImage("m034") },
    { name: "김치 우삼겹덮밥", image: getImage("m035") },
    { name: "매콤 삼겹덮밥", image: getImage("m036") },
    { name: "매콤 우삼겹덮밥", image: getImage("m037") },
  ],
  [
    { name: "콩나물 비빔밥", image: getImage("m038") },
    { name: "새싹 비빔밥", image: getImage("m039") },
    { name: "참치 비빔밥", image: getImage("m040") },
    { name: "삼겹 비빔밥", image: getImage("m041") },
    { name: "제육 비빔밥", image: getImage("m042") },
    { name: "갈비 비빔밥", image: getImage("m043") },
    { name: "우삼겹 비빔밥", image: getImage("m044") },
    { name: "육회 비빔밥", image: getImage("m045") },
  ],
  [
    { name: "삼겹 고기만찬", image: getImage("m046") },
    { name: "갈비 고기만찬", image: getImage("m047") },
    { name: "제육 고기만찬", image: getImage("m048") },
    { name: "우삼겹 고기만찬", image: getImage("m049") },
  ],
  [
    { name: "김치볶음밥", image: getImage("m050") },
    { name: "삼겹 김치볶음밥", image: getImage("m051") },
    { name: "참치 김치볶음밥", image: getImage("m052") },
    { name: "스팸 김치볶음밥", image: getImage("m053") },
    { name: "우삼겹 김치볶음밥", image: getImage("m054") },
    { name: "새우볶음밥", image: getImage("m055") },
  ],
];

const sideMenuList = ["공기밥", "간장계란밥", "2칸반찬", "계란후라이", "맛보기 육회 (100G)", "미니 계란찜", "두부김치", "동그랑땡 (8개)", "옛날소시지 (8개)", "고구마튀김 (2개)", "가래떡튀김 (3개)", "김말이튀김 (4개)", "새우튀김 (2개)", "떡갈비", "깻잎튀김 (2개)", "미니 김치전 (4개)", "미니 김치전", "미니 해물부추전", "고추튀김 (2개)", "용가리치킨 (5개)", "팝만두 (20개)", "등심돈까스", "고기잎새만두 (3개)", "스팸계란후라이", "대왕 오징어튀김 (2개)", "치킨가라아게 (5개)", "오미산적 (4개)"];

export { menuList, sideMenuList };
