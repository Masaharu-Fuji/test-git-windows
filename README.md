# test-git-windows

## gh, ghq, peco 導入

Windows対応

1. scoop をインストール

2. それぞれをインストール

```bash
scoop install git
scoop install gh
scoop install go
go install github.com/motemen/ghq
scoop install peco
```

3. ~直下に.gitconfig 作成追記
 - edit インストール
  `winget install Microsoft.Edit`

```.gitconfig
[ghq]
	root=D:\\Users\\81703\\ghq
	root=D:\\Users\\81703\\.ghq
```

4. リポジトリをクローン
`ghq get http://github.com/<username>/<repository>`

5. pecoによる実行ファイル作成
```bash
echo $PROFILE
// 直接vscodeを開きたい方は下記
code $PROFILE
```
`peco_profile.txt`参照

```bash
repo
```