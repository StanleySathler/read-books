/**
 * Using a Stack, create a function to verify if an expression
 * composed by square brackets, braces and round brackets (parentheses)
 * is balanced.
 *
 * A balanced expression can be described by "[{()()}]", whereas a
 * non-balanced expression can be described by "[{()(})]".
 **/

#include <stdio.h>
#include <stdlib.h>
#include "../../stack/static_stack.h"
#include "../../utils/string.h"

#define MAX_CHARS 100

typedef struct StaticStack Stack;

typedef struct {
  char opening;
  char closing;
} Character;

int main(void) {
  char expression[MAX_CHARS]  = {""};
  Character squareBracket     = { '[', ']' };
  Character brace             = { '{', '}' };
  Character roundBracket      = { '(', ')' };
  Stack* stack                = create_static_stack(MAX_CHARS);

  printf("Type your expression: ");
  fgets(expression, MAX_CHARS, stdin);
  remove_new_line_from_end(expression);

  for (unsigned short int i = 0; expression[i]; i++) {
    char current_letter = expression[i];

    /* if current_letter is an opening character */
    if (
      current_letter == squareBracket.opening ||
      current_letter == brace.opening ||
      current_letter == roundBracket.opening
    ) {
      push_static_stack(stack, current_letter);
    }

    /* if current_letter is a closing character */
    else if (
      current_letter == squareBracket.closing ||
      current_letter == brace.closing ||
      current_letter == roundBracket.closing
    ) {
      Character char_to_compare;

      if (current_letter == squareBracket.closing) {
        char_to_compare = squareBracket;
      } else if (current_letter == brace.closing) {
        char_to_compare = brace;
      } else if (current_letter == roundBracket.closing) {
        char_to_compare = roundBracket;
      }

      /* if last char in Stack is different from current_letter's opening char */
      if (top_static_stack(stack) != char_to_compare.opening) {
        printf("Your expression is invalid! \n");
        abort();
      }

      /* however, if it's equal, so we can pop the Stack */
      else pop_static_stack(stack);
    }

    /* if current_letter is neither a opening or a closing character */
    else {
      printf("An invalid character was found in your expression: %c (code: %d) \n", current_letter, (int) current_letter);
      abort();
    }
  }

  printf("You got a valid expression: %s", expression);

  return 0;
}
