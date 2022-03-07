/*
문제 설명

라디오를 자주 듣는 네오는 라디오에서 방금 나왔던 음악이 무슨 음악인지 궁금해질 때가 많다. 
그럴 때 네오는 다음 포털의 '방금그곡' 서비스를 이용하곤 한다. 방금그곡에서는 TV, 라디오 등에서 나온 음악에 관해 제목 등의 정보를 제공하는 서비스이다.

네오는 자신이 기억한 멜로디를 가지고 방금그곡을 이용해 음악을 찾는다. 그런데 라디오 방송에서는 한 음악을 반복해서 재생할 때도 있어서 네오가 기억하고 있는 멜로디는 음악 끝부분과 처음 부분이 이어서 재생된 멜로디일 수도 있다. 반대로, 한 음악을 중간에 끊을 경우 원본 음악에는 네오가 기억한 멜로디가 들어있다 해도 그 곡이 네오가 들은 곡이 아닐 수도 있다. 그렇기 때문에 네오는 기억한 멜로디를 재생 시간과 제공된 악보를 직접 보면서 비교하려고 한다. 다음과 같은 가정을 할 때 네오가 찾으려는 음악의 제목을 구하여라.

방금그곡 서비스에서는 음악 제목, 재생이 시작되고 끝난 시각, 악보를 제공한다.
네오가 기억한 멜로디와 악보에 사용되는 음은 C, C#, D, D#, E, F, F#, G, G#, A, A#, B 12개이다.
각 음은 1분에 1개씩 재생된다. 음악은 반드시 처음부터 재생되며 음악 길이보다 재생된 시간이 길 때는 음악이 끊김 없이 처음부터 반복해서 재생된다. 음악 길이보다 재생된 시간이 짧을 때는 처음부터 재생 시간만큼만 재생된다.
음악이 00:00를 넘겨서까지 재생되는 일은 없다.
조건이 일치하는 음악이 여러 개일 때에는 라디오에서 재생된 시간이 제일 긴 음악 제목을 반환한다. 재생된 시간도 같을 경우 먼저 입력된 음악 제목을 반환한다.
조건이 일치하는 음악이 없을 때에는 “(None)”을 반환한다.
입력 형식
입력으로 네오가 기억한 멜로디를 담은 문자열 m과 방송된 곡의 정보를 담고 있는 배열 musicinfos가 주어진다.

m은 음 1개 이상 1439개 이하로 구성되어 있다.
musicinfos는 100개 이하의 곡 정보를 담고 있는 배열로, 각각의 곡 정보는 음악이 시작한 시각, 끝난 시각, 음악 제목, 악보 정보가 ','로 구분된 문자열이다.
음악의 시작 시각과 끝난 시각은 24시간 HH:MM 형식이다.
음악 제목은 ',' 이외의 출력 가능한 문자로 표현된 길이 1 이상 64 이하의 문자열이다.
악보 정보는 음 1개 이상 1439개 이하로 구성되어 있다.
출력 형식
조건과 일치하는 음악 제목을 출력한다.
*/
function solution(m, musicinfos) {
    var answer = '';
    let arr = []
    for(let i=0;i<musicinfos.length;i++){
        //음악이 총 재생된 시간을 분단위로 변환해주는 과정이다. 1음에 1분단위이기 총재생된 길이는 음의 개수와 일치한다.
        let info = musicinfos[i].split(',')
        let start = info[0].split(':')
        let end = info[1].split(':')
        let time = (end[0]-start[0])*60 + (end[1]-start[1])
        
        //음을 분리해주는 작업이다. 초반에 이부분때문에 많이 틀렸는데 #은 음이 아니기떄문에 ABC#을 A,B,C,#과같이 4개의 음으로 계산하는 실수를 막기위해 A,B,C#으로 분리해주는것이다
        let music = []
        for(let j=0;j<info[3].length;j++){
            if(info[3][j] !== '#')music.push(info[3][j])
            else{music[music.length-1]+='#'}
        }
        
        //음을하나씩 불리후에 총재생된 시간만큼 하나씩붙여서 총재생된시간동안 사용된 음의 총개수를 하나의 문자열로 구해서 arr 배열에 [총재생시간, 사용음, 노래제목]순으로 담는다.
        //이는 재생시간이 다르면 재생시간이 가장 긴 음악이 먼저 사용되고 총재생시간이 같으면 앞의 음악이 사용되야하기때문에 우선은 사용된 순서대로 arr배열에 담아주었다.
        let len = music.length
        let temp = ''
        temp += music.join('').repeat(Math.floor(time/len))
        for(let j=0;j<time%len;j++){
            temp += music[j]
        }
        arr.push([time,temp,info[2]])
    }
    
    let max = 0
    for(let i=0;i<arr.length;i++){
         //이과정은 들었던음이 사용된 음에 포함이 되어있는지 확인하는데(1번조건문) ABC가 있더라도ABC#일수 있으므로 들은음뒤에 #이있는지 확인(2번조건문) 
         //이후에 답으로 우선 사용가능한게 1.총재생시간이 가장 길어야하고 2. 같으면 먼저나온노래를 사용하므로 정답의 후보로 재생시간을 갱신후에 기존 재생시간보다 길은지 확인한다.
         //재생시간이 같더라도 재생시간이 더 길지않으면 기존의 사용된 노래를 사용하므로 모든 조건을 만족할수 있다.  
        for(let j=0;j<=arr[i][1].length;j++){
            if(arr[i][1].slice(j,j+m.length) === m && arr[i][1][j+m.length] !=='#' && max<arr[i][0]){
                answer = arr[i][2]
                max = arr[i][0]
                break;
            }
        }        
    }
    //이단계에 와서도 해당하는 곡이 없다는 것이므로 빈자열처리를 반드시 해준다
    if(answer === '') answer = '(None)'
    return answer;
}
