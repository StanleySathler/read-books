#ifndef STATIC_STACK_H
#define STATIC_STACK_H

#include "../logger/logger.h"

struct StaticStack
{
  unsigned int size;
  int top;
  char *items;
};

struct StaticStack* create_static_stack(unsigned int size)
{
  struct StaticStack* stack = malloc(sizeof(struct StaticStack));
  stack->size = size;
  stack->top = -1;
  stack->items = malloc(size * sizeof(char));

  return stack;
}

unsigned int is_static_stack_empty(struct StaticStack* stack)
{
  return (stack->top == -1) ? 1 : 0;
}

unsigned int is_static_stack_full(struct StaticStack* stack)
{
  return (stack->top == (stack->size - 1)) ? 1 : 0;
}

void push_static_stack(struct StaticStack* stack, char item)
{
  if (is_static_stack_full(stack))
  {
    logger_error("Tried to push a new item into a full stack");
    abort();
  }

  stack->top++;
  stack->items[stack->top] = item;
}

char top_static_stack(struct StaticStack* stack)
{
  if (is_static_stack_empty(stack))
  {
    logger_error("Tried to retrieve an item from an empty stack");
    abort();
  }

  return stack->items[stack->top];
}

char pop_static_stack(struct StaticStack* stack)
{
  if (is_static_stack_empty(stack))
  {
    logger_error("Tried to pop an item from an empty stack");
    abort();
  }

  return stack->items[stack->top--];
}

void destroy_static_stack(struct StaticStack* stack)
{
  free(stack->items);
  free(stack);
  stack = NULL;
}

#endif
