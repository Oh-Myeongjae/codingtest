/*
아래 예제와 같이 개를 출력하시오.

|\_/|
|q p|   /}
( 0 )"""\
|"^"`    |
||_/=\\__|
*/
console.log(`|\\_/|
|q p|   /}
( 0 )\"\"\"\\
|\"^\"\`    |
||_/=\\\\__|`)
/*
큰 따옴표 ( " ) 나 백슬래시 ( \ ) 는 단독으로 써서 출력할 수가 없다.
그래서 이를 출력하기 위해 특정 구문을 사용하는데 이를 이스케이프 한다고 말한다.
그리고 결합된 그 문자를 Escape Sequence  라고 하는데 백슬래시 ( \ ) 와 문자 하나를 결합하여 나타낸다.
우리가 흔히 쓰는 \n \t  같은 것도 이스케이프 시퀀스다.
( 이스케이프 시퀀스 = 이스케이프 문자 = 제어문자 .. 모두 같은 말이다. )
즉, 백슬래시를 출력하려면  ( " \\ " ) 로 해줘야 백슬래시 ( \ ) 하나가 출력되며, 백슬래시 두 개를 출력하고 싶은경우 ( " \\\\ " ) 로 해주어야 2개가 출력된다.  
아래는자바에서 사용하는 표준 문자열 이스케이프 리스트다.

Escape Sequences

Escape Sequence	                         Description
      \t	                  Insert a tab in the text at this point.
      \b	                  Insert a backspace in the text at this point.
      \n	                  Insert a newline in the text at this point.
      \r	                  Insert a carriage return in the text at this point.
      \f	                  Insert a form feed in the text at this point.
      \'	                  Insert a single quote character in the text at this point.
      \"	                  Insert a double quote character in the text at this point.
      \\	                  Insert a backslash character in the text at this point.

*/
