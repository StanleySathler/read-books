/*
 * Create a program that fixes the exercise 2.6
 * by using `strdup()` function.
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "../../stack/static_stack.h"

typedef struct StaticStack Stack;

int main(void) {
  Stack* stack = create_static_stack(3);
  char phrase[11]; /* max capacity: 10 chars */

  for (unsigned short int i = 0; i < 3; i++) {
    printf("Phrase: ");
    fgets(phrase, 11, stdin);

    char* copied_phrase = strdup(phrase);

    printf("&phrase: %p \n", phrase); /* debug purpose */
    printf("&copied_phrase: %p \n", copied_phrase); /* debug purpose */

    push_static_stack(stack, copied_phrase);
  }

  printf("\n");

  while (!is_static_stack_empty(stack)) {
    char* popped_phrase = pop_static_stack(stack);

    printf("&popped_phrase: %p \n", popped_phrase); /* debug purpose */

    // puts(popped_phrase);
    free(popped_phrase);
  }

  return 0;
}
