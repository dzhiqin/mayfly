package mayfly.sys.web.form;

import lombok.Data;
import mayfly.common.validation.annotation.NotNull;
import mayfly.common.validation.annotation.Size;

/**
 * @author meilin.huang
 * @version 1.0
 * @date 2018-11-23 5:55 PM
 */
@Data
public class PageForm {
    @NotNull
    private Integer pageNum;

    @NotNull
    @Size(min = 1, max = 20)
    private Integer pageSize;
}