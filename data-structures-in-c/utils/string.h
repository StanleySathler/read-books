#ifndef STRING_H
#define STRING_H

#include <string.h>

void remove_new_line_from_end(char* text) {
  unsigned short int last_char_index = (strlen(text) - 1);
  if (text[last_char_index] == '\n')
    text[last_char_index] = '\0';
}

#endif
