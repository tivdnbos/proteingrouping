'use strict';
import {
    AssertionError,
    AttributeError,
    BaseException,
    DeprecationWarning,
    Exception,
    IndexError,
    IterableError,
    KeyError,
    NotImplementedError,
    RuntimeWarning,
    StopIteration,
    UserWarning,
    ValueError,
    Warning,
    __JsIterator__,
    __PyIterator__,
    __Terminal__,
    __add__,
    __and__,
    __call__,
    __class__,
    __envir__,
    __eq__,
    __floordiv__,
    __ge__,
    __get__,
    __getcm__,
    __getitem__,
    __getslice__,
    __getsm__,
    __gt__,
    __i__,
    __iadd__,
    __iand__,
    __idiv__,
    __ijsmod__,
    __ilshift__,
    __imatmul__,
    __imod__,
    __imul__,
    __in__,
    __init__,
    __ior__,
    __ipow__,
    __irshift__,
    __isub__,
    __ixor__,
    __jsUsePyNext__,
    __jsmod__,
    __k__,
    __kwargtrans__,
    __le__,
    __lshift__,
    __lt__,
    __matmul__,
    __mergefields__,
    __mergekwargtrans__,
    __mod__,
    __mul__,
    __ne__,
    __neg__,
    __nest__,
    __or__,
    __pow__,
    __pragma__,
    __pyUseJsNext__,
    __rshift__,
    __setitem__,
    __setproperty__,
    __setslice__,
    __sort__,
    __specialattrib__,
    __sub__,
    __super__,
    __t__,
    __terminal__,
    __truediv__,
    __withblock__,
    __xor__,
    abs,
    all,
    any,
    assert,
    bool,
    bytearray,
    bytes,
    callable,
    chr,
    copy,
    deepcopy,
    delattr,
    dict,
    dir,
    divmod,
    enumerate,
    filter,
    float,
    getattr,
    hasattr,
    input,
    int,
    isinstance,
    issubclass,
    len,
    list,
    map,
    max,
    min,
    object,
    ord,
    pow,
    print,
    property,
    py_TypeError,
    py_iter,
    py_metatype,
    py_next,
    py_reversed,
    py_typeof,
    range,
    repr,
    round,
    set,
    setattr,
    sorted,
    str,
    sum,
    tuple,
    zip
} from "./org.transcrypt.__runtime__.js";

var __name__ = "ProteinSubGrouping";
export var anti_occam_create_protein_subgroups = function (protein_groups, protein_peptide_dict) {
    var protein_subgroups = dict();
    var subgroup_count = 0;
    for (var protein_group_id of protein_groups.py_keys()) {
        var the_protein_list = list();
        for (var protein of protein_groups[protein_group_id]) the_protein_list.append(protein);
        var protein_2_possible_grouping_set = dict();
        for (var protein_1 of the_protein_list) {
            var protein_1_grouping_set = set();
            protein_1_grouping_set.add(protein_1);
            for (var protein_2 of the_protein_list) if (protein_peptide_dict[protein_1].issubset(protein_peptide_dict[protein_2]) || protein_peptide_dict[protein_2].issubset(protein_peptide_dict[protein_1])) if (protein_1 != protein_2) protein_1_grouping_set.add(protein_2);
            protein_2_possible_grouping_set[protein_1] =
                protein_1_grouping_set
        }
        var already_used = list();
        for (var protein_test1 of protein_2_possible_grouping_set.py_keys()) if (!__in__(protein_test1, already_used)) {
            var subgroup = list();
            subgroup.append(protein_test1);
            already_used.append(protein_test1);
            for (var protein_test2 of protein_2_possible_grouping_set.py_keys()) if (!__in__(protein_test2, already_used)) if (protein_2_possible_grouping_set[protein_test1] == protein_2_possible_grouping_set[protein_test2]) {
                subgroup.append(protein_test2);
                already_used.append(protein_test2)
            }
            subgroup_count++;
            var protein_subgroup_id_first_half = str(protein_group_id) + "_";
            var subgroup_id = protein_subgroup_id_first_half + str(subgroup_count);
            protein_subgroups[subgroup_id] = subgroup
        }
    }
    return protein_subgroups
};
export var occam_create_protein_subgroups = function (protein_groups, protein_peptide_dict) {
    var protein_subgroups = dict();
    var subgroup_count = 0;
    for (var protein_group_id of protein_groups.py_keys()) {
        var protein_subgroup_id_first_half = str(protein_group_id) + "_";
        var the_protein_list = list();
        for (var protein of protein_groups[protein_group_id]) the_protein_list.append(protein);
        var already_used = set();
        for (var protein_1 of the_protein_list) if (!__in__(protein_1, already_used)) {
            var subgroup = list();
            subgroup.append(protein_1);
            already_used.add(protein_1);
            for (var protein_2 of the_protein_list) if (!__in__(protein_2, already_used)) if (protein_peptide_dict[protein_1] == protein_peptide_dict[protein_2]) {
                subgroup.append(protein_2);
                already_used.add(protein_2)
            }
            subgroup_count++;
            var subgroup_id = protein_subgroup_id_first_half + str(subgroup_count);
            protein_subgroups[subgroup_id] = subgroup
        }
    }
    return protein_subgroups
};

//# sourceMappingURL=ProteinSubGrouping.map
