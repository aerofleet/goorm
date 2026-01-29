###### **1. Git 브랜치 전략 비교**



|구분|Git Flow|GitHub Flow|GitLab Flow|
|-|-|-|-|
|특징|가장 전통적이고 복잡한 구조|단순함과 지속적 배포(CD) 강조|Git Flow와 GitHub Flow의 절충안|
|브랜치 구성|main, develop, feature, release, hotfix|main, feature|main, production  (또는 환경별 브랜치)|
|장점|배포 주기와 개발 주기가 분리되어 안정적|구조가 간단하여 속도가 빠름|배포 환경(운영, 테스트 등) 관리가 용이|
|단점|관리가 복잡하고 브랜치 간 동기화 비용 높음|배포 전 테스트 단계가 부족할 수 있음|환경 브랜치 관리에 주의가 필요|
|적용|배포 주기가 긴 대규모 프로젝트|상시 배포가 이루어지는 웹 서비스|배포 환경이 여러 개인 프로젝트|

###### 

**2. 선택 전략 기반 브랜치 설계 (GitHub Flow 기반)**

실무에서 가장 대중적으로 쓰이는 GitHub Flow를 바탕으로 설계한다. 이 전략은 main 브랜치는 항상 배포 가능한 상태를 유지하는 것이 핵심이다.



\[브랜치 구조도]

Plaintext  main (항상 배포 가능) -------------------------------------------->

&nbsp;     		\\                                                       / (Merge)

&nbsp;      		  \\-- feature/login (로그인 기능 개발) --/

&nbsp;          	            \\                                          / (Merge)

&nbsp;                             \\-- feature/ui-fix (UI 수정) --/



###### **3. 적용 시나리오 및 실습 과정**

사용자가 index.html의 주소를 수정하고 기능을 추가하는 상황을 가정하여 작성한다.



\[시나리오]

1. &nbsp;	기능 개발 시작: main 브랜치에서 feature/update-location 브랜치를 생성한다.
2. &nbsp;	코드 수정: index.html에서 주소를 "인천"으로 수정하고 커밋한다.
3. &nbsp;	PR(Pull Request) 생성: 로컬 브랜치를 원격(GitHub)에 올리고, main으로 합쳐달라는 PR을 올린다.
4. &nbsp;	리뷰 및 병합: 팀원의 리뷰를 거친 후 충돌이 없다면 main에 병합(Merge)한다.



\[실습 명령어 절차]



\# 1. 새로운 브랜치 생성 및 이동

git checkout -b feature/update-location



\# 2. 파일 수정 후 스테이징 및 커밋

\# (index.html 수정 작업 완료 후)

git add index.html

git commit -m "feat: 주소를 인천으로 업데이트"



\# 3. 원격 저장소에 브랜치 푸시

git push origin feature/update-location



\# 4. GitHub 웹사이트 접속

\# - \[Compare \& pull request] 버튼 클릭

\# - 변경 사항 확인 후 PR 생성



\# 5. Merge 완료 후 로컬 정리

git checkout main

git pull origin main

git branch -d feature/update-location



###### **4. 실습 요약 및 팁**

* 커밋 메시지 규칙: 실무에서는 feat:, fix:, docs: 등의 접두사를 붙여 어떤 작업인지 명확히 한다.
* PR의 중요성: 직접 main에 머지하지 않고 PR을 쓰는 이유는 코드 리뷰를 통해 잠재적인 버그를 잡고 지식을 공유하기 위함이다.
* 충돌 관리: 아까 실습했던 것처럼 pull 시 발생하는 충돌은 피하기보다 자연스러운 과정으로 받아들이고, 수동으로 해결하며 add와 commit으로 마무리한다.
