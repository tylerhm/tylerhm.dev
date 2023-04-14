rm -rf ~/.config/nvim ~/.local/share/nvim ~/.cache/nvim
git clone https://github.com/NvChad/NvChad ~/.config/nvim --depth 1
git clone https://github.com/tylerhm/nvchad-config ~/.config/nvim/lua/custom --depth 1
echo "Configured... Will finish install on next `nvim` invocation."
