/*
문제 설명
각 칸마다 S, L, 또는 R가 써져 있는 격자가 있습니다. 당신은 이 격자에서 빛을 쏘고자 합니다. 이 격자의 각 칸에는 다음과 같은 특이한 성질이 있습니다.

빛이 "S"가 써진 칸에 도달한 경우, 직진합니다.
빛이 "L"이 써진 칸에 도달한 경우, 좌회전을 합니다.
빛이 "R"이 써진 칸에 도달한 경우, 우회전을 합니다.
빛이 격자의 끝을 넘어갈 경우, 반대쪽 끝으로 다시 돌아옵니다. 예를 들어, 빛이 1행에서 행이 줄어드는 방향으로 이동할 경우, 같은 열의 반대쪽 끝 행으로 다시 돌아옵니다.
당신은 이 격자 내에서 빛이 이동할 수 있는 경로 사이클이 몇 개 있고, 각 사이클의 길이가 얼마인지 알고 싶습니다. 경로 사이클이란, 빛이 이동하는 순환 경로를 의미합니다.

예를 들어, 다음 그림은 격자 ["SL","LR"]에서 1행 1열에서 2행 1열 방향으로 빛을 쏠 경우, 해당 빛이 이동하는 경로 사이클을 표현한 것입니다.

이 격자에는 길이가 16인 사이클 1개가 있으며, 다른 사이클은 존재하지 않습니다.

격자의 정보를 나타내는 1차원 문자열 배열 grid가 매개변수로 주어집니다. 주어진 격자를 통해 만들어지는 빛의 경로 사이클의 모든 길이들을 배열에 담아 오름차순으로 정렬하여 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ grid의 길이 ≤ 500
1 ≤ grid의 각 문자열의 길이 ≤ 500
grid의 모든 문자열의 길이는 서로 같습니다.
grid의 모든 문자열은 'L', 'R', 'S'로 이루어져 있습니다.
*/
function solution(grid) {
    const R = grid.length; // 행의 길이
    const C = grid[0].length; // 열의 길이
    const visit = [...Array(R)].map(() => [...Array(C)].map(() => [...Array(4)].map(() => 0))); // 3차원 visit 배열
    const dirMap = { S: 0, R: 1, L: 2 };
    const map = grid.map(r => [...r].map(c => dirMap[c])); // S => 0, R => 1, L => 2 로 미리 바꿔서 맵 만들기
    const my = [-1, 0, 1, 0]; 
    const mx = [0, 1, 0, -1]; 
    const transDir = [[0, 1, 3], [1, 2, 0], [2, 3, 1], [3, 0, 2]]; // 방향 전환
    const ans = [];

    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            for (let dir = 0; dir < 4; dir++) {
                if (visit[i][j][dir]) continue;

                let curDir = dir; // 현재 방향
                let r = i; // 현재 r좌표
                let c = j; // 현재 c좌표
                let count = 0;

                // 방문하지 않은 격자를 만날 동안
                while (!visit[r][c][curDir]) {  
                    count++;

                    visit[r][c][curDir] = 1;
                    curDir = transDir[curDir][map[r][c]]; // 방향 전환
                    r += my[curDir]; // 좌표 갱신
                    c += mx[curDir];
                    r = r >= R ? 0 : r < 0 ? R - 1 : r;
                    c = c >= C ? 0 : c < 0 ? C - 1 : c;
                }
                ans.push(count);
            }
        }
    }
    return ans.sort((a, b) => a - b);
}
