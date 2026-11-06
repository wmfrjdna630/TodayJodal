# 오늘도 조달

서버 없이 실행하는 공공조달 운영 시뮬레이션 게임입니다.

## 실행

`jodal-office/오늘도조달_단일실행.html`을 브라우저로 엽니다.

## 개발

- `jodal-office/dist/index.html` — 화면 진입점
- `jodal-office/dist/game.js` — 의뢰, 게임 진행, 화면 이벤트
- `jodal-office/dist/contract.js` — 계약 금액과 예산 판정
- `jodal-office/dist/style.css` — 화면 스타일과 연출
- `jodal-office/dist/assets/` — 교체 가능한 그림과 에셋 연결

소스나 그림 수정 후 프로젝트 루트에서 다음 명령으로 단일 실행 파일을 생성합니다.

```sh
python jodal-office/build_single.py
```

진행은 브라우저에 자동 저장됩니다. 게임 내 업체와 수치, 평가와 예산 배정은 창작 규칙입니다.
