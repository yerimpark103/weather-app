export default function getClothingByWeather(temp: number) {
  if (temp > 27) return "민소매티, 반바지, 반팔티, 치마";
  else if (temp > 22 && temp <= 27) return "반팔티, 얇은 셔츠, 반바지, 면바지";
  else if (temp > 20 && temp <= 22)
    return "긴팔티, 얇은 가디건, 면바지, 청바지";
  else if (temp > 17 && temp <= 20)
    return "얇은 니트, 얇은 자켓, 가디건, 맨투맨, 면바지, 청바지";
  else if (temp > 12 && temp <= 17)
    return "얇은 자켓, 가디건, 간절기 야상, 맨투맨, 니트, 살색 스타킹";
  else if (temp > 10 && temp <= 12)
    return "울자켓, 트렌치코트, 니트, 면바지, 청바지, 검정 스타킹";
  else if (temp > 6 && temp <= 10)
    return "코트, 두꺼운 가죽 자켓, 두꺼운 니트, 울 스카프, 두꺼운 바지";
  else if (temp > 2 && temp <= 6)
    return "패딩, 두꺼운 코트, 히트텍, 내복, 목도리, 장갑";
  else if (temp <= 2) return "생존패딩 및 방한복";
}
