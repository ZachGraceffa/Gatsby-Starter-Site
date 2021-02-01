# Helpful Commands
For running Gatsby on Ubuntu

### Error where localhost:8000 is taken
  - Find process:
    - `lsof -i TCP:8000 | grep LISTEN`
  - Kill process:
    - `kill -9 PID_TO_KILL`
  - Or run this to do both in one line:
    - `kill -9 $(lsof -i TCP:8000 | grep LISTEN | awk '{print $2}')`

### Errors from `npm install` or `npm update`:
  - `sudo npm <install|update> -unsafe-perm=true --allow-root`

### Errors from `gatsby develop`:
  - `sudo rm -rf node_modules/`
  - `sudo rm package-lock.json`
  - `sudo npm cache clear --force`
  - `sudo npm <install|update> -unsafe-perm=true --allow-root`
