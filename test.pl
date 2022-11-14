test(t2, [27.31307938, 25.92258493, -28.87112887, -22.21557617]).

pow(X, R) :- R is X * X.

getElement(X, R) :- test(X, Y), 
  maplist(pow(), Y, R).
  % maplist(plus(1), Y, R).

% If the given number is less or equal to 0 then it modified to 0.
% If not, it remains the same.
normalizeNegative(X, R) :- (
  X =< 0 ->
  R = 0; 
  X > 0 ->
  R = X
  ).

scaleUpValue(X, Y, R) :- (
  Y > 0 ->
  R = Y / X;
  Y =< 0 ->
  R = Y
  ).

sumList([], 0).
sumList([H|T], Sum) :-
  sumList(T, Rest),
  Sum is H + Rest.




% normalizeWeights1(X, R) :- test(X, Y), 
%   maplist(normalizeNegative(), Y, R).

normalizeWeights2(X, R) :- test(X, Y),
  R = maplist(normalizeNegative(), Y).
  % Total =
  % maplist(scaleUpValue(Y), ).
