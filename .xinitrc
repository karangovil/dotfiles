#!/bin/sh

[[ -f ~/.Xresources ]] && xrdb -merge -I$HOME ~/.Xresources

if [ -d /etc/X11/xinit/xinitrc.d ]; then
  for f in /etc/X11/xinit/xinitrc.d/*;do
    [ -x "$f" ] && . "$f"
  done
  unset f
fi

~/.fehbg &

systemctl --user start redshift.service

exec i3
