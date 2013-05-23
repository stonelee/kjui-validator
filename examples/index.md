# 基本用法

- order: 1

---

````iframe:400
<form action="" method="get" data-widget="validator">
  <div class="form-bd">
    <div class="form-item">
      <label for="username" class="form-label"><span class="form-required">*</span>用户名：</label>
      <input id="username" name="username" class="input" type="email" required />
      <div class="form-explain">用户名为电子邮箱。</div>
    </div>
    <div class="form-item form-item-error">
      <label for="password" class="form-label"><span class="form-required">*</span>密码：</label>
      <input id="password" name="password" class="input" value="123" type="password" required minlength="5" />
      <div class="form-explain">密码的长度必须大于或等于5。</div>
    </div>
    <div class="form-item">
        <label for="password-confirmation" class="form-label"><span class="form-required">*</span>重复输入密码：</label>
        <input id="password-confirmation" name="password-confirmation" class="input" type="password" required data-rule="confirmation{target:'#password', name: '第二遍'}" data-errormessage-required="请再重复输入一遍密码，不能留空。" />
        <div class="form-explain">请再输入一遍密码。</div>
    </div>

    <div class="form-item">
      <label class="form-label"><span class="form-required">*</span>性别：</label>
      <input name="sex" id="male" value="male" type="radio" required data-errormessage-required="请选择您的性别。"/> <label for="male">Male</label>
      <input name="sex" id="female" value="female" type="radio"/> <label for="female">Female</label>
    </div>

    <div class="form-item">
      <label class="form-label"><span class="form-required">*</span>交通工具：</label>
      <input name="vehicle" id="Bike" value="Bike" type="checkbox" required data-errormessage-required="请选择您的交通工具。"><label for="Bike">自行车</label>
      <input name="vehicle" id="Car" value="Car" type="checkbox"><label for="Car">汽车</label>
    </div>

    <div class="form-item">
      <label class="form-label"><span class="form-required">*</span>国籍：</label>
      <select name="country" required data-errormessage-required="请选择您的国籍。">
        <option value="">请选择</option>
        <option value="china">China</option>
        <option value="usa">USA</option>
      </select>
    </div>

    <div class="form-item">
      <label for="note" class="form-label"><span class="form-required">*</span>备注：</label>
      <textarea id="note" name="note" required></textarea>
    </div>

  </div>
  <div class="form-ft">
    <input class="btn" type="submit" value="确定"/>
    <input class="btn" type="button" value="取消"/>
  </div>
</form>

<script>

seajs.use(['widget', '$'], function(Widget, $) {
  $(function() {
    Widget.autoRenderAll();
  });
});

</script>
````

