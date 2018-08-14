/*
 * Explain what the code below does and why.
 *
 * A) If the user types "one", "two" and "three",
 * the "tree" string will be printed three times.
 * The reason is because `phrase` is statically
 * allocated, so its address in `gets()` is always
 * the same. This way, each `gets()` call overrides
 * the last value.
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "../../stack/static_stack.h"

typedef struct StaticStack Stack;

int main(void) {
  Stack* stack = create_static_stack(5);
  char phrase[11];

  for (unsigned short int i = 0; i < 3; i++) {
    printf("? ");
    fgets(phrase, 11, stdin);

    printf("(%hd) address: %p \n", i, phrase);

    push_static_stack(stack, phrase);
  }

  while (!is_static_stack_empty(stack)) {
    puts(pop_static_stack(stack));
  }

  return 0;
}
