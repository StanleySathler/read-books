#ifndef LOGGER_H
#define LOGGER_H

void logger_error(char *message) {
  printf("[ERROR] %s \n", message);
}

void logger_success(char *message) {
  printf("[SUCCESS] %s \n", message);
}

void logger_debug(char *message) {
  printf("\x1b[34m"); /* starts blue color */
  printf("[DEBUG] %s", message);
  printf("\x1b[0m \n"); /* resets color to default */
}

#endif
