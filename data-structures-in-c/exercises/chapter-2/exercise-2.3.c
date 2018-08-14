/*
 * Using a Stack, create a program to invert the order of the
 * letters of each word of a phrase typed by the user.
 * E.g. "just a test" => "tsuj a tset"
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "../../stack/static_stack.h"

#define MAX_LETTERS 15

int main(void)
{
  char phrase[MAX_LETTERS];
  struct StaticStack* stack = create_static_stack(MAX_LETTERS);

  printf("Phrase: ");
  fgets(phrase, sizeof(phrase), stdin);

  /* if the last char is a \n, replaces it by a \0 */
  unsigned short int phrase_last_index = (strlen(phrase) - 1);
  if (phrase[phrase_last_index] == '\n') {
    phrase[phrase_last_index] = '\0';
  }

  for (unsigned int i = 0; i < MAX_LETTERS; i++) {
    char current_letter = phrase[i];

    /* if current_letter is a space or a null character */
    if (!current_letter || current_letter == ' ') {
      while (!is_static_stack_empty(stack)) {
        printf("%c", pop_static_stack(stack));
      }

      printf("%c", current_letter);
    }

    /* if current_letter is a normal character */
    else {
      push_static_stack(stack, current_letter);
    }

    /* if current_letter is a null character */
    if (!current_letter) {
      printf("\n");
      break;
    }
  }
}
