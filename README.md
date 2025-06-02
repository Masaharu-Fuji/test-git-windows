# test-git-windows

## 開発環境のセットアップ

### 必要なツールのインストール

1. **Scoop** のインストール
   - Windows用のパッケージマネージャー

2. **各種ツールのインストール**
   ```bash
   scoop install git
   scoop install gh
   scoop install go
   go install github.com/motemen/ghq
   scoop install peco
   ```

3. **Git設定の追加**
   - `winget install Microsoft.Edit` でエディタをインストール
   - `~/.gitconfig` に以下の設定を追加:
   ```txt
   [ghq]
       root=D:\\Users\\81703\\ghq
       root=D:\\Users\\81703\\.ghq
   ```

### リポジトリのクローン

```bash
ghq get http://github.com/<username>/<repository>
```

### pecoの設定

1. PowerShellプロファイルの確認
   ```bash
   echo $PROFILE
   # VSCodeで開く場合
   code $PROFILE
   ```

2. 設定ファイルの参照
   - `peco_profile.txt` を参照してください

3. リポジトリの検索
   ```bash
   repo
   ```
