import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: '20170001', name: '멘티', auth: 1, password: '1234' },
      { id: '20170002', name: '멘토', auth: 2, password: '1234' },
      { id: '20170003', name: '관리자', auth: 3, password: '1234' },
    ];

    const manual = [
        { title: 'SM 사업이란?', contents: 
            [
                { content: '소프트웨어공학과 멘토링 사업이라는 말로 성공회대 소프트웨어공학과 내에서 선후배간 지식 공유가 이루어지는 것을 의미한다.'}
            ] 
        },
        { title: '장학금 지급 기준', contents: 
            [
                { content: '1차 보고서 이후 1차장학금(10만원)을 지급한다.' },
                { content: '2차 보고서 이후 활동한 내역, 인증샷 등을 참고하여 2차 장학금(15만원)을 지급한다.' },
                { content: '활동 내역 중 인증샷이 없을 경우 무효 처리한다.' },
                { content: '이 때, 인증샷은 조원, 조장 모두 포함되어 있어야 하며 불가피한 사유가 있을 경우 인증샷에  없더라도 인증샷으로 인정한다.' },
            ]
        },
        { title: '추가장학금 지급 기준', contents: 
            [
                { content: 'C언어, java, 이산수학, 데이터베이스 개론 등 과목을 주제로 하는 멘토링은 멘티의 해당 과목의 평균 성적이  B+ 이상이어야 한다.' },
                { content: '그 외 주제(html, css, 문서실무, 보안 등)는 포트폴리오를 제작해야 한다.' },
                { content: '(이 때 포트폴리오는 학습 주제에 맞는 활동 자료 모음집을 의미한다.)' },
            ] 
        },
        { title: '팀 선별 방법', contents: 
            [
                { content: '멘토가 팀별 주제를 계획한 것을 계획서에 적어 증명자료와 함께 제출한다.' },
                { content: '학생회에서 멘토 계획서를 검토 후 멘토로 선정한다.' },
                { content: '1학년 과정지도 수업에서 학생회가 참여하여 팀별 주제 발제 후 1학년이 원하는 팀으로 참여한다. (1학년 필수 참여)' },
                { content: '2학년의 경우 카톡으로 공지 후 개인적으로 연락한다. (2학년 선택 참여)' },
                { content: '인원 분배의 경우 가위바위보를 통하여 선정한다.' },
            ] 
        },
        { title: '멘토 기준', contents: 
            [
                { content: '1. C언어, 이산수학, java, 데이터베이스개론의 경우 해당 과목 성적이 B+ 이상이어야 한다.' },
                { content: '2. 그 외의 주제의 경우 본인이 전문 지식을 가르칠 수준이라는 것을 증빙할 수 있는 자료(활동 자료 등)가 필요하다.' },
            ] 
        },
        { title: '팀별 스터디', contents: 
            [
                { content: '1학년 : 이산수학, C프로그래밍, 문서작성(PPT 등), 보안, html' },
                { content: '2학년 : java, 데이터베이스개론, html, 보안' },
                { content: '지정된 주제 외에도 선택할 수 있지만 스터디라는 명목에서 벗어난다고 판단될 경우 멘토에서 제외한다.' },
                { content: '1차 보고서 제출 시 팀 별 과제 중간 보고서 함께 제출한다.' },
                { content: '2차 보고서 제출 시 팀 별 과제 최종 보고서 함께 제출한다.' },
                { content: '중간 보고서 미 제출 시 활동비, 장학금을 지급하지 않는다.' },
            ] 
        },
        { title: '멘티 선택 항목 (2가지 중 1가지는 반드시 해야 함)', contents: 
            [
                { content: '컨퍼런스를 1학기 1회 이상 참여한다.' },
                { content: '학생회 사업을 2회 이상 참여한다. (개강파티, 해오름제, 과 MT, 대동제, 종강파티)' },
            ] 
        },
    ];

    const notices = [
        {
            id: 13,
            title: '2학년 멘토 신청방법 및 유의사항 안내',
            date: '2017-08-30',
            content: '2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내',
        },
        {
            id: 12,
            title: '2학년 멘티 신청방법 및 유의사항 안내',
            date: '2017-08-30',
            content: '2djlkasjdlkasjdas학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내',
        },
        {
            id: 11,
            title: '2017년 2학기 멘토 장학금 안내',
            date: '2017-09-01',
            content: '233333333333학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내',
        },
        {
            id: 10,
            title: '2017년 2학기 멘토 설문조사 / 멘티 설문조사 방법 안내 멘티 설문조사 방법 안내 반드시 필독',
            date: '2017-09-03',
            content: '2129301238120380192390128309128309123학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내',
        },
        {
            id: 9,
            title: '2017년 2학기 멘토 설문조사 / 멘티 설문조사 방법 안내',
            date: '2017-09-03',
            content: '2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내',
        },
        {
            id: 8,
            title: '2017년 2학기 멘토 설문조사 / 멘티 설문조사 방법 안내',
            date: '2017-09-03',
            content: '2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내',
        },
        {
            id: 7,
            title: '2017년 2학기 멘토 설문조사 / 멘티 설문조사 방법 안내',
            date: '2017-09-03',
            content: '2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내',
        },
        {
            id: 6,
            title: '2017년 2학기 멘토 설문조사 / 멘티 설문조사 방법 안내',
            date: '2017-09-03',
            content: '2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내',
        },
        {
            id: 5,
            title: '2017년 2학기 멘토 설문조사 / 멘티 설문조사 방법 안내',
            date: '2017-09-03',
            content: '2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내',
        },
        {
            id: 4,
            title: '2017년 2학기 멘토 설문조사 / 멘티 설문조사 방법 안내',
            date: '2017-09-03',
            content: '2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내',
        },
        {
            id: 3,
            title: '2017년 2학기 멘토 설문조사 / 멘티 설문조사 방법 안내',
            date: '2017-09-03',
            content: '2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내',
        },
        {
            id: 2,
            title: '2017년 2학기 멘토 설문조사 / 멘티 설문조사 방법 안내',
            date: '2017-09-03',
            content: '2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내',
        },
        {
            id: 1,
            title: '2017년 2학기 멘토 설문조사 / 멘티 설문조사 방법 안내',
            date: '2017-09-03',
            content: '2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내',
        },
    ];

    const questions = [
        {
            id: 10,
            title: '질문 1',
            author: 'test',
            views: 0,
            date: '2017-08-30',
            content: '2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내',
        },
        {
            id: 9,
            title: '질문 1',
            author: 'test',
            views: 0,
            date: '2017-08-30',
            content: '2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내',
        },
        {
            id: 8,
            title: '질문 1',
            author: 'test',
            views: 0,
            date: '2017-08-30',
            content: '2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내',
        },
        {
            id: 7,
            title: '질문 1',
            author: 'test',
            views: 0,
            date: '2017-08-30',
            content: '2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내',
        },
        {
            id: 6,
            title: '질문 1',
            author: 'test',
            views: 0,
            date: '2017-08-30',
            content: '2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내',
        },
        {
            id: 5,
            title: '질문 1',
            author: 'test',
            views: 0,
            date: '2017-08-30',
            content: '2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내',
        },
        {
            id: 4,
            title: '2학년 멘티 신청방법 및 유의사항 안내',
            author: 'test',
            views: 0,
            date: '2017-08-30',
            content: '2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내',
        },
        {
            id: 3,
            title: '2017년 2학기 멘토 장학금 안내',
            author: 'test',
            views: 0,
            date: '2017-09-01',
            content: '2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내',
        },
        {
            id: 2,
            title: '2017년 2학기 멘토 설문조사 / 멘티 설문조사 방법 안내 멘티 설문조사 방법 안내 반드시 필독',
            author: 'test',
            views: 0,
            date: '2017-09-03',
            content: '2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내',
        },
        {
            id: 1,
            title: '2017년 2학기 멘토 설문조사 / 멘티 설문조사 방법 안내',
            author: 'test',
            views: 0,
            date: '2017-09-03',
            content: '2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내2학년 멘토 신청방법 및 유의사항 안내',
        },
    ];

    const mentorings = [
        { id: 1, img: 'assets/c.png', team: '팀1', title: 'C언어', subTitle: 'C 멘토', people: 1, open: false },
        { id: 2, img: 'assets/algo.png', team: '팀2', title: '알고리즘', subTitle: 'algo 멘토', people: 2, open: false },
        { id: 3, img: 'assets/Logo1.jpg', team: '팀3', title: 'C언어2', subTitle: 'C 멘토', people: 3, open: true },
        { id: 4, img: 'assets/java.png', team: '팀4', title: '자바2', subTitle: 'java 멘토', people: 4, open: true },
        { id: 5, img: 'assets/algo.png', team: '팀5', title: '알고리즘2', subTitle: 'algo 멘토', people: 1, open: true },
        { id: 6, img: 'assets/Logo2.jpg', team: '팀6', title: 'C언어3', subTitle: 'C 멘토', people: 2, open: true },
    ];

    const mentoringSetting = [
        {
            id: 0,
            mentor: {
                startDate: Date(),
                endDate: Date(),
                maxNumber: 20,
            },
            mentee: {
                startDate: Date(),
                endDate: Date(),
                maxNumber: 5,
            },
            room: {
                period: 30,
                count: 5,
            },
            survey: [
                { title: '1차 설문', content: 'ㅁㄴㅇㄴ망ㄴㅁㅇ' }
            ]
        }
    ];

    return { users, manual, notices, questions, mentorings, mentoringSetting };
  }
}