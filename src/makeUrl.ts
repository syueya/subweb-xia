import { ElMessage } from 'element-plus';
import useClipboard from 'vue-clipboard3';

const { toClipboard } = useClipboard();

export function makeUrl(form: any, defaultBackend: string, customSubUrl: any) {

    if (!form.sourceSubUrl || !form.clientType) {
        ElMessage.error('订阅链接与客户端为必填项');
        return false;
    }

    let backend = form.customBackend === '' ? defaultBackend : form.customBackend;
    let sourceSub = form.sourceSubUrl || '';
    sourceSub = sourceSub.replace(/(\n|\r|\n\r)/g, '|');

    customSubUrl.value =
        backend +
        'target=' +
        form.clientType +
        '&url=' +
        encodeURIComponent(sourceSub);

    const isAdvanced =
        form.includeRemarks ||
        form.excludeRemarks ||
        (form.selectedTypes && form.selectedTypes.length > 0); // 添加对 form.selectedTypes 是否定义的检查



    if (isAdvanced) {
        if (form.remoteConfig) {
            customSubUrl.value += '&config=' + encodeURIComponent(form.remoteConfig);
        }
        if (form.excludeRemarks) {
            customSubUrl.value += '&exclude=' + encodeURIComponent(form.excludeRemarks);
        }
        if (form.includeRemarks) {
            customSubUrl.value += '&include=' + encodeURIComponent(form.includeRemarks);
        }

        customSubUrl.value +=
            '&emoji=' +
            form.emoji.toString() +
            '&udp=' +
            form.udp.toString() +
            '&append_type=' +
            form.appendType.toString() +
            '&scv=' +
            form.scv.toString() +
            '&list=' +
            form.nodeList.toString();


    }

    toClipboard(customSubUrl.value).then(() => {
        ElMessage.success('定制订阅已复制到剪贴板');
    }).catch(() => {
        ElMessage.error('复制失败');
    });
}

export function makeShortUrl() {
    // 实现逻辑
}
