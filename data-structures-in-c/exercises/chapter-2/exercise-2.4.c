/*
 * Create a program that uses two different Stacks to
 * sort a list of numbers. The Stack A will contain
 * the numbers in descending order (so it becomes
 * in ascending order while popped and printed).
 * The Stack B should be used as an auxiliar one.
 *
 * Examples:
 * Input: [6, 3, 7, 2, 0]
 * Stack: [7, 6, 3, 2, 0]
 * Output: [0, 2, 3, 6, 7]
 */

#include <stdio.h>
#include <stdlib.h>
#include "../../stack/static_stack.h"

#define MAX_NUMBERS 6

typedef struct StaticStack Stack;

int main(void) {
  unsigned short int numbers[MAX_NUMBERS] = {3, 2, 5, 4, 8, 9};
  Stack* main_stack = create_static_stack(MAX_NUMBERS);
  Stack* aux_stack = create_static_stack(MAX_NUMBERS);

  /* populates main_stack with the numbers */
  for (unsigned short int i = 0; i < MAX_NUMBERS; i++) {
    push_static_stack(main_stack, numbers[i]);
  }

  /* while main_stack is not empty */
  while (!is_static_stack_empty(main_stack)) {
    unsigned short int main_top_number = pop_static_stack(main_stack);

    while (
      !is_static_stack_empty(aux_stack) &&
      top_static_stack(aux_stack) > main_top_number
    ) {
      unsigned short int aux_top_number = pop_static_stack(aux_stack);
      push_static_stack(main_stack, aux_top_number);
    }

    push_static_stack(aux_stack, main_top_number);
  }

  /* prints all main_stack's items */
  while (!is_static_stack_empty(main_stack)) {
    printf("%hhd ", pop_static_stack(main_stack));
  }

  return 0;
}
