# A Cascata (cascading)
A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento. 

* Seu estilo e lido de cima para baixo

é levado em consideração 3 fatores 

1. origem do estilo 
2. especificidade 
3. importância 

### Origem do estilo é muito mais forte 

inline é mais fortque que o > tag style > tag link

### Especificidade 

É um cálculo matemático, onde, cada tipo de seletor e oigem do estilo, possuem valores a serem considererados. 

0. universal selector, combinators e negation pseudo-class (: not())
1. element type selector e pseudo-elements (::before, ::after)
10. classes e attribute seletctors ([type="radio"])
100. ID selector
1000. Inline

### a regra !important

# At-rules @

*

