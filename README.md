# www

###css
1.命名要加前缀，除header，footer以外
`.c-abc{}` 
`.l-abc{}`

2.除 `.abc a{}` 以外，不允许使用标签做css命名, 如 `.abc div{}` `.abc li{}`

3. `.active{}` `.selected{}` 可以使用，但必须有父class,如 `.c-abc .active{}` 